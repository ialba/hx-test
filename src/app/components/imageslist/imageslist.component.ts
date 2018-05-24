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

  page    : number;
  pages   : number;
  perpage : number;
  total   : number;

  constructor(private apiService : ApiService) { }

  ngOnInit() {
    console.log('llamando')
    this.apiService.getPhotos()
      .then(response => {
        this.photos = response.items as Photo[];
        
      });
  }

}
