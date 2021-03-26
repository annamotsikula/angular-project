import { Injectable } from '@angular/core';
import { LogInResponse, SignInForm } from '../data/sign-in.interface';
import { HttpClient } from '@angular/common/http';
import { localStorageService } from '../core/localStorage.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {

  constructor(private locstorageService:localStorageService, private http:HttpClient) { }
  login(data: SignInForm): Observable<LogInResponse> {
    return this.http.post<LogInResponse>("https://reqres.in/api/login", data)
  }
}
