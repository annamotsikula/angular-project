import { Injectable } from '@angular/core';
import { HttpEvent, HttpRequest, HttpHandler, HttpInterceptor, HttpEventType, HttpResponse} from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { cacheControlService } from './cacheControl.service'

@Injectable({
    providedIn: 'root'
})
export class cacheInterceptor implements HttpInterceptor {
    constructor(private cachecontrolService: cacheControlService){}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        const CSHResponse = this.cachecontrolService.getUrl(req.url);

        if(req.method !== 'GET'){
            this.cachecontrolService.errorCache();
            return next.handle(req)
        }
        
        if(CSHResponse) {
            console.log ('responsed url: ' , req.url)
            console.log(CSHResponse); 
            return of (CSHResponse);
        }

        return next.handle(req).pipe(tap((event) => {
            if(event instanceof HttpResponse) {
                console.log('Caching RES: ', req.url)
                this.cachecontrolService.bringInUrl(req.url, event)
            }
        }))
    }
}