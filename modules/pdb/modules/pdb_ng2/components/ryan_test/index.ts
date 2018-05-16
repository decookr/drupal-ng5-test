/**
 * @module RyanTest
 * @preferred
 */ /** */

// lib imports
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
// external imports
import {LazyLoadComponent} from 'helpers/lazy-load-component';
// internal imports
import {RyanTest} from './component';
// exports
export * from './globals';

@NgModule({
    imports: [
        FormsModule,
        HttpModule,
        JsonpModule,
        CommonModule
    ],
    providers: [
        {provide: LazyLoadComponent, useValue: RyanTest}
    ],
    bootstrap: [RyanTest],
    declarations: [
        RyanTest
    ],
    entryComponents: [
        RyanTest
    ]
})
export class RyanTestModule {}
