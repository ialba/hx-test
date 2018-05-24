import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Photo } from '../interfaces/photo'

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private API_KEY : string = '3fd8410626c218d4497609e4ef727216';

  apiUrl : string = 'https://api.flickr.com/services/rest/?api_key='+this.API_KEY+'&format=json&nojsoncallback=1';

  localJson : string = 'assets/data/flickr.json';

  constructor(private http: Http) {}

  getGalleryPhotos(galleryId : string = '66911286-72157647277042064'){
    return this.http.get(this.apiUrl+'&method=flickr.galleries.getPhotos&gallery_id='+galleryId)
        .toPromise()
        .then(response => response.json())
        .catch(this.handleError);
  }

  getPhotos(){
    return this.http.get(this.localJson)
        .toPromise()
        .then(response => response.json())
        .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
