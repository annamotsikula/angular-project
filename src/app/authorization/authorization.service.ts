import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

import { LogInResponse, SignInForm } from '../data/sign-in.interface';
import { SignUpForm, SignUpResponse } from '../data/sign-up.interface';

import { localStorageService } from '../core/localStorage.service';

import { TOKEN_Key, REQRES_URL, EXPIRE_TIME_KEY, REFRESH_KEY } from 'src/config';


@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {

  constructor(private locstorageService:localStorageService, private http:HttpClient) { }

  login(data: SignInForm): Observable<boolean> {
    return this.http.post<LogInResponse>(`${REQRES_URL}/login`, data)
    .pipe(tap((result) => { 
      this.locstorageService.set(TOKEN_Key, "QpwL5tke4Pnpja7X4");
      this.locstorageService.set(REFRESH_KEY, "Refresh_Token");
      this.tokenExpiringTime();
      
    }), map((result) => {
      if (result.token) {
        return true
      } else {
        return false;
      }
    })
    
      );
  }
  register(data: SignUpForm): Observable<boolean> {
    return this.http.post<SignUpResponse>(`${REQRES_URL}/register`, data)
    .pipe(tap((result) => { 
      this.locstorageService.set(TOKEN_Key, result.token);
      this.tokenExpiringTime();
    }), map((result) => {
      if (result.token) {
        return true
      } else {
        return false;
      }
    })
    
      );
  }
  AuthSuccessful(): boolean {
  return this.locstorageService.exists(TOKEN_Key)
  }
   AuthDecline(): void {
    this.locstorageService.delete(TOKEN_Key);
    this.locstorageService.delete(REFRESH_KEY);
    this.locstorageService.delete(EXPIRE_TIME_KEY);

  }

  refresh(tok: string): boolean {
    if (tok === 'Refresh_Token') {
      this.locstorageService.set(TOKEN_Key, "QpwL5tke4Pnpja7X4");
      this.locstorageService.set(REFRESH_KEY, "Refresh_Token");
      this.tokenExpiringTime();

      return true
    }
    return false
  }
  getRefreshToken(): string | undefined {
    return this.locstorageService.get(REFRESH_KEY);
  }


  tokenExpiringTime(): void {
    const expiring_time = new Date();
    expiring_time.setMinutes(new Date().getMinutes()+1);
    this.locstorageService.set(EXPIRE_TIME_KEY, expiring_time.toJSON())

  }
  tokenExpired():boolean {
    const currentTime = new Date().getTime();
    const time = new Date(this.locstorageService.get(EXPIRE_TIME_KEY));
    
    return currentTime > time.getTime();
  }
}
 
