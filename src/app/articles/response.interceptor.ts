import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {catchError, tap} from 'rxjs/operators';
import { HttpEvent, HttpRequest, HttpHandler, HttpInterceptor, HttpEventType} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
  })
  export class responseInterceptor implements HttpInterceptor{
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
       console.log('responseInterceptor', req.url);
       return next.handle(req).pipe(tap((event) => {
           if(event.type === HttpEventType.Response) {
               console.log('responseInterceptor DATA', event.body);
           }
       }))
    }
}

