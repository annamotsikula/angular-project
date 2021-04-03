import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthorizationService} from './authorization/authorization.service';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationGuard implements CanActivate {
  constructor(private _router: Router, private authorizationService: AuthorizationService ){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree { 
      if( !this.authorizationService.AuthSuccessful()) {
        console.log(state.url);
        // console.log(route.url);
        this.authorizationService.redirect = state.url;
      
        this._router.navigate(['/authorization/sign-in']);
      }
      
    return true;
  }
  
  
}
