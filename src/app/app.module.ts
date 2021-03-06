import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ErrorpageComponent } from './errorpage/errorpage.component';
import { HomeComponent } from './home/home.component';
import { NavigationComponent } from './navigation/navigation.component';
import {NgxPaginationModule} from 'ngx-pagination';

import { ArticleModule } from './articles/article.module';
import { StatsModule } from './list-statistics/stats.module';
import { AuthorizationModule } from './authorization/authorization.module';
import { CoreModule } from './core/core.module';

import { ArticleResolver } from './articles/article-resolver.service';
import { responseInterceptor } from './core/response.interceptor';
import { cacheInterceptor } from './core/cache.interceptor';
import { AuthorizationInterceptor } from './core/authorization.interceptor';


import {GetListComponent} from './authorization/virus-detect/get-list.component';


@NgModule({
  declarations: [
    AppComponent,
    ErrorpageComponent,
    HomeComponent,
    NavigationComponent,
    GetListComponent
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxPaginationModule,
    AuthorizationModule,
    ArticleModule,
    StatsModule,
    
    CoreModule,
    RouterModule.forRoot([
      {
        path: 'home',
        component: HomeComponent,
        resolve: { 
          responseOfArticles: ArticleResolver
        }
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
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthorizationInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: responseInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: cacheInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor () {}
 }
