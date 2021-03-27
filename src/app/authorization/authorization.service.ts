import { Injectable } from '@angular/core';
import { LogInResponse, SignInForm } from '../data/sign-in.interface';
import { HttpClient } from '@angular/common/http';
import { localStorageService } from '../core/localStorage.service';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

import { TOKEN_Key } from 'src/config';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {

  constructor(private locstorageService:localStorageService, private http:HttpClient) { }

  login(data: SignInForm): Observable<boolean> {
    return this.http.post<LogInResponse>("https://reqres.in/api/login", data)
    .pipe(tap((result) => { this.locstorageService.set(TOKEN_Key, result.token)}), map((result) => {
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
}
