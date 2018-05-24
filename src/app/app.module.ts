import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpModule } from '@angular/http';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatCardModule,
  MatIconModule,
  MatToolbarModule,
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatChipsModule,
  MatGridListModule } from '@angular/material';


import { AppComponent } from './app.component';
import { SearchbarComponent } from './components/searchbar/searchbar.component';
import { ImageslistComponent } from './components/imageslist/imageslist.component';
import { ImagecardComponent } from './components/imagecard/imagecard.component';

import { ApiService} from './services/api.service';

@NgModule({
  declarations: [
    AppComponent,
    SearchbarComponent,
    ImageslistComponent,
    ImagecardComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    HttpModule,
    MatChipsModule,
    MatGridListModule
  ],
  providers: [ ApiService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
