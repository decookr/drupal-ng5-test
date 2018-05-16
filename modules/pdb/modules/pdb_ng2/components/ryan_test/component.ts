import {Component, Inject} from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  moduleId: __moduleName,
  selector: 'ryan-test',
  templateUrl: 'template.html',
})
export class RyanTest {

  private apiURL = 'https://pixabay.com/api/?key=8928590-80a77f7d7bf02f9d52dd6a1a4&q=fish';
  data: any = [];

  constructor(@Inject(Http) private http: Http){

  }

  getData(){
    return this.http.get(this.apiURL)
    .map((res: Response) => res.json())
  }

  getImages(){
    this.getData().subscribe(data => {
      console.log(data);
      this.data = data.hits;
    })
  }

  ngOnInit(){
    this.getData();
    this.getImages();
  }
  
}
