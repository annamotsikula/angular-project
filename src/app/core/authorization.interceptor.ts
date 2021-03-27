import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpEvent, HttpRequest, HttpHandler, HttpInterceptor} from '@angular/common/http';
import { localStorageService} from './localStorage.service';
import { TOKEN_Key } from 'src/config';

@Injectable({
    providedIn: 'root',
  })
  export class AuthorizationInterceptor implements HttpInterceptor {

      constructor(private storage: localStorageService) {}

      intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
          console.log('AuthorizationInterceptor', request.url);
          const getStorage = this.storage.get(TOKEN_Key);
          if(getStorage) {
              const requestCloned : HttpRequest<any> = request.clone({
              setHeaders: {
                  Authorization: getStorage,
              }
               
          });
          return next.handle(requestCloned);
          }
          return next.handle(request)
          
      }
  }