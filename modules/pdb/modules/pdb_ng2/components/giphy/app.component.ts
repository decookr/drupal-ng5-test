import { Component } from '@angular/core';
// import { Http, Response } from '@angular/http';
// import {Observable} from 'rxjs';
import 'rxjs/add/operator/map';

@Component({
  moduleId: __moduleName,
  selector: 'giphy',
  templateUrl: './app.component.html',
  styleUrls:['style.css']
})
export class Giphy {

  title = 'Giphy Gif Generator';

}
