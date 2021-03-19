import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { SignInForm } from 'src/app/data/sign-in.interface';
import { AuthorizationService } from '../authorization.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
  signInform: SignInForm = {
    email: "",
    password: "",
    rememberUser: false,

  }
  constructor(
    private _router: Router,
    private _authorizationService: AuthorizationService) { }

  onSubmit(signIn: NgForm) {
    if(this._authorizationService.login(this.signInform)) {
      localStorage.setItem('token', "token107goneRight");
      this._router.navigate(['/statistics']);
    }
  }

  ngOnInit(): void {
  }
}
  
