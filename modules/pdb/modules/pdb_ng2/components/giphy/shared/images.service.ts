import { Injectable, Inject } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()

export class ImageService{
    private query: string;
    private API_KEY: string = '&api_key=g88fIbbpUDzKv5H5tsCgUKEJyaA7CZqI';
    private API_URL: string = 'http://api.giphy.com/v1/gifs/search?q=';
    // private URL: string = this.API_URL + this.API_KEY + '&q=';
    // private URL: string = this.API_URL + this.API_KEY;

    // private perPage: string = '&per_page=10';

    // http://api.giphy.com/v1/gifs/search?q=funny+cat&api_key=YOUR_API_KEY

    constructor(@Inject(Http) private _http: Http){ }

    getImage(query){
        console.log(this.API_URL + query + this.API_KEY);
        return this._http.get(this.API_URL + query + this.API_KEY)
        .map(res => res.json());
        
    }
}