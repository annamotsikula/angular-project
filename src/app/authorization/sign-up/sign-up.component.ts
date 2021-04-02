import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { AuthorizationService } from '../authorization.service';

import {SignUpForm} from '../../data/sign-up.interface';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  signUpform: SignUpForm = {
    email: 'eve.holt@reqres.in',
    password: 'pistol'
  }
  constructor(private _authorizationService: AuthorizationService, private _router: Router) { }

  onSubmit(signUp: NgForm) {
    this._authorizationService.login(this.signUpform).subscribe((AuthSuccessful: boolean) => {
      
    if(AuthSuccessful) {
      this._router.navigate(['/authorization/virus-detect'])
    }
  });
    }

  ngOnInit(): void {
  }

}
