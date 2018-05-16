import { Component, OnInit, Inject } from '@angular/core';
import { ImageService } from '../shared/images.service';

@Component({
  moduleId: __moduleName,
  selector: 'app-image-list',
  templateUrl: './image-list.component.html',
  styleUrls: ['./image-list.component.css']
})
export class ImageListComponent implements OnInit {
  images: any[];

  imagesFound: boolean = false;
  searching: boolean = false;

  handleSuccess(data){
    this.imagesFound = true;
    this.images = data.data;
    console.log(this.images);
  }

  handleError(error){
    console.log(error);
  }

  constructor(@Inject(ImageService) private _imageService : ImageService) { }

  searchImages(query: string){
    this.searching = true;
    return this._imageService.getImage(query).subscribe(
      data => this.handleSuccess(data),
      error => this.handleError(error),
      () => this.searching = false
    )
  }

  ngOnInit() {
  }

}
