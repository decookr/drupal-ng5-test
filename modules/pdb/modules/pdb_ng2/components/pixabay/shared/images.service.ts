import { Injectable, Inject } from '@angular/core';
import { Http} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()

export class ImageService{
    private API_KEY: string = '8928590-80a77f7d7bf02f9d52dd6a1a4';
    private API_URL: string = 'https://pixabay.com/api/?key=';
    private URL: string = this.API_URL + this.API_KEY + '&q=';
    private perPage: string = '&per_page=10';


    constructor(@Inject(Http) private _http: Http){ }

    getImage(query){
        return this._http.get(this.URL + query + this.perPage)
        .map(res => res.json());
        
    }
}