import { Component, OnInit, Input } from '@angular/core';

import { Photo } from '../../interfaces/photo';

@Component({
  selector: 'app-imagecard',
  templateUrl: './imagecard.component.html',
  styleUrls: ['./imagecard.component.css']
})
export class ImagecardComponent implements OnInit {

  @Input() photo : Photo;

  constructor() {
  }

  ngOnInit() {
    console.log(this.photo.tags.trim().split(' '))
  }

}
