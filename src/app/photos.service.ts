import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface UnsplashResponse {
  urls: {
    regular: string;
  };
}

const unsplash_link = 'https://api.unsplash.com';

@Injectable({
  providedIn: 'root',
})
export class PhotosService {
  constructor(private http: HttpClient) {}

  getPhoto() {
    return this.http.get<UnsplashResponse>(unsplash_link + '/photos/random', {
      headers: {
        Authorization: 'Client-ID 43ONN0bymhiu1had_m0w-Bkkq1yJP-7c_hdJrudIBu4',
      },
    });
  }
}
