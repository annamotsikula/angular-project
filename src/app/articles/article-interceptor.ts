import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpEvent, HttpRequest, HttpHandler, HttpInterceptor} from '@angular/common/http';
import { myKey } from 'src/config';
@Injectable({
    providedIn: 'root',
  })
  export class ArticleInterceptor implements HttpInterceptor {
      intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
          console.log('articleInterceptor', request.url);
          const requestCloned : HttpRequest<any> = request.clone({
              setHeaders: {
                'X-Api-Key': myKey,
              }
               
          });
          return next.handle(requestCloned);
      }
  }