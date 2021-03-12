import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IResponse } from './articles';
import { Observable } from 'rxjs';
import { myKey, baseUrl } from "../../config";

@Injectable({
    providedIn: 'root'
})
export class ArticleService {
    private _baseUrl: string = baseUrl;
    private _key: string= myKey;
    private theme: string="covid19";
    private releaseDate: string = '2021-03-10'


    constructor(private http:HttpClient) {}

    getAllArticles():Observable<IResponse>{
        return this.http.get<IResponse>(`${this._baseUrl}/everything?q=${this.theme}&from${this.releaseDate}&sortBy=popularity&apiKey=${this._key}`);
        
    }
   
}