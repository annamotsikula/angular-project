import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EXPIRE_TIME_MS } from 'src/config';

import { AuthorizationService } from '../authorization/authorization.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  constructor(private authorizationService: AuthorizationService, private router: Router) { }
 

  ngOnInit(): void {
   if (this.authorizationService.AuthSuccessful()) {
    this.tokenValidation();
   }
  }

  private tokenValidation(): void {
    setInterval(() => {
      if(this.authorizationService.tokenExpired()) {
        if(this.authorizationService.getRefreshToken()){
          const refreshtoken : string = this.authorizationService.getRefreshToken() as string;
          if ( !this.authorizationService.refresh(refreshtoken)) {
            this.authorizationFailed();

          }    
        } else {
          this.authorizationFailed();
          }
        console.log(this.authorizationService.getRefreshToken());
      }
    }, EXPIRE_TIME_MS);
  }
 
  private authorizationFailed() {
    this.authorizationService.AuthDecline();
    this.router.navigate(['home']);

  }
  forLogOut(event: Event) {
    this.authorizationFailed()
  }

}
