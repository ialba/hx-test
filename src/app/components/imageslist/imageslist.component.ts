import { Component, OnInit } from '@angular/core';

import { ApiService } from '../../services/api.service';

import { Photo } from '../../interfaces/photo';

@Component({
  selector: 'app-imageslist',
  templateUrl: './imageslist.component.html',
  styleUrls: ['./imageslist.component.css']
})
export class ImageslistComponent implements OnInit {

  photos  : Photo[];

  searchTerm : string = "";

  constructor(private apiService : ApiService) { }

  ngOnInit() {
    this.loadAllPhotos();
  }

  loadAllPhotos(){
    this.apiService.getPhotos()
      .then(response => {
        this.photos = response.items as Photo[];

      });
  }

  filterList(){
    if(this.searchTerm == ""){
      this.loadAllPhotos();
      return false;
    }
    this.photos = this.photos.filter((photo) => (photo.tags.toLowerCase().indexOf(this.searchTerm) != -1 || photo.title.toLowerCase().indexOf(this.searchTerm) != -1))
  }

}
