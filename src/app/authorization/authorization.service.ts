import { Injectable } from '@angular/core';
import { SignInForm } from '../data/sign-in.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {

  constructor() { }
  login(data: SignInForm) {
    return "Successful"
  }
}
