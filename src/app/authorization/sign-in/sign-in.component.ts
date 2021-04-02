import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { LogInResponse, SignInForm } from 'src/app/data/sign-in.interface';
import { AuthorizationService } from '../authorization.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
  signInform: SignInForm = {
    email: "eve.holt@reqres.in",
    password: "cityslicka",
    rememberUser: false,

  }
  constructor(
    private _router: Router,
    private _authorizationService: AuthorizationService) { }

    onSubmit(signIn: NgForm) {
    this._authorizationService.login(this.signInform).subscribe((AuthSuccessful: boolean) => {
      console.log(AuthSuccessful);
    if(AuthSuccessful) {
      this._router.navigate(['/authorization/virus-detect'])
    }
  });
    }
  

  ngOnInit(): void {
  }
}
  
