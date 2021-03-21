import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpEvent, HttpRequest, HttpHandler, HttpInterceptor} from '@angular/common/http';
import { myKey } from 'src/config';
@Injectable({
    providedIn: 'root',
  })
  export class ArticleInterceptor implements HttpInterceptor {
      intercept(request: HttpRequest<any>, handler: HttpHandler): Observable<HttpEvent<any>> {
          console.log('articleInterceptor', request.url);
          const requestCloned : HttpRequest<any> = request.clone({
              setHeaders: {
                  Authorization: myKey,
              }
               
          });
          return handler.handle(requestCloned);
      }
  }