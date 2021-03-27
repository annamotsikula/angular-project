import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { AccountComponent } from './account/account.component';
import { GetListComponent } from './virus-detect/get-list.component';

import { AuthorizationGuard } from '../authorization.guard';



@NgModule({
  declarations: [SignInComponent, SignUpComponent, AccountComponent, ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      {
        path: 'authorization/account',
        component: AccountComponent,
        canActivate: [AuthorizationGuard]
      },
      {
        path: 'authorization/virus-detect',
        component: GetListComponent,
        canActivate: [AuthorizationGuard]
      },
      {
        path: 'authorization/sign-in',
        component: SignInComponent,
      },
      {
        path: 'authorization/sign-up',
        component: SignUpComponent,
      },
      
    ])
  ]
})
export class AuthorizationModule { }
