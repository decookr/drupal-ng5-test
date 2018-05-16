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

import { Giphy } from './app.component';
import { ImageListComponent } from './image-list/image-list.component';

import { ImageService } from './shared/images.service';

// exports
export * from './globals';

@NgModule({
  declarations: [
    Giphy,
    ImageListComponent
  ],
  imports: [
    FormsModule,
    HttpModule,
    CommonModule
  ],
  providers: [ImageService,
    {provide: LazyLoadComponent, useValue: Giphy}
  ],
  bootstrap: [Giphy]
})
export class GiphyModule { }
