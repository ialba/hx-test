import { Component, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css']
})
export class SearchbarComponent implements OnInit {

  searchTerm : string = "";

  @Output() myEvent = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }



}
