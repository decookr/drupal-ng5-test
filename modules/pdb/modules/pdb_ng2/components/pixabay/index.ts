/**
 * @module Ng2ExampleConfiguration
 * @preferred
 */ /** */

import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';

import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// external imports
import {LazyLoadComponent} from 'helpers/lazy-load-component';

import { PixabayImgGen } from './app.component';
import { ImageListComponent } from './image-list/image-list.component';

import { ImageService } from './shared/images.service';

// exports
export * from './globals';

@NgModule({
  declarations: [
    PixabayImgGen,
    ImageListComponent
  ],
  imports: [
    FormsModule,
    HttpModule,
    CommonModule
  ],
  providers: [ImageService,
    {provide: LazyLoadComponent, useValue: PixabayImgGen}
  ],
  bootstrap: [PixabayImgGen]
})
export class PixabayImgGenModule { }
