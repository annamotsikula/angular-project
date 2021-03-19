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
 
    constructor(private http:HttpClient) {}

    getAllArticles(theme:string):Observable<IResponse>{
        return this.http.get<IResponse>(`${this._baseUrl}/everything?&apiKey=${this._key}&${theme}`);
        
    }
    getOne(infoID: string): Observable<IResponse>{
        return this.http.get<IResponse>(`${this._baseUrl}/everything?&apiKey=${this._key}&qInTitle=${infoID}&pageSize=1&page=1`)
    }
}