import { Component } from '@angular/core';
import { PhotosService } from '../photos.service';

@Component({
  selector: 'app-photo-show',
  templateUrl: './photo-show.component.html',
  styleUrls: ['./photo-show.component.css'],
})
export class PhotoShowComponent {
  public photoUrl: string;

  constructor(private photosService: PhotosService) {
    this.photoUrl = '';

    this.fetchPhoto();
  }

  private fetchPhoto() {
    this.photosService.getPhoto().subscribe((response) => {
      this.photoUrl = response.urls.regular;
    });
  }

  public onClick(): void {
    this.fetchPhoto();
  }
}
