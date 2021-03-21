import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IResponse } from './articles';
import { Observable } from 'rxjs';
import { baseUrl } from "../../config";

@Injectable({
    providedIn: 'root'
})
export class ArticleService {
    private _baseUrl: string = baseUrl;
    
 
    constructor(private http:HttpClient) {}

    getAllArticles(theme:string):Observable<IResponse>{
        return this.http.get<IResponse>(`${this._baseUrl}/everything?&${theme}`);
        
    }
    getOne(infoID: string): Observable<IResponse>{
        return this.http.get<IResponse>(`${this._baseUrl}/everything?&qInTitle=${infoID}&pageSize=1&page=1`)
    }
}