import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ErrorpageComponent } from './errorpage/errorpage.component';
import { HomeComponent } from './home/home.component';
import { NavigationComponent } from './navigation/navigation.component';

import { ArticleModule } from './articles/article.module';
import { StatsModule } from './list-statistics/stats.module';
import { AuthorizationModule } from './authorization/authorization.module';


@NgModule({
  declarations: [
    AppComponent,
    ErrorpageComponent,
    HomeComponent,
    NavigationComponent,
    
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ArticleModule,
    StatsModule,
    AuthorizationModule,
    RouterModule.forRoot([
      {
        path: 'home',
        component: HomeComponent,
      },
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
      },
      {
        path: '**',
        component: ErrorpageComponent,
      },
    ]),
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor () {}
 }
