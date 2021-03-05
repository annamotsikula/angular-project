import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListStatistics } from './list-statistics/list-statistics.component';
import { DetailsComponent } from './details/details.component';
import { ErrorpageComponent } from './errorpage/errorpage.component';
import { HomeComponent } from './home/home.component';
import { NavigationComponent } from './navigation/navigation.component';
import { ArticlesComponent } from './articles/articles.component';
import { CardsComponent } from './articles/cards/cards.component';
@NgModule({
  declarations: [
    AppComponent,
    ListStatistics,
    DetailsComponent,
    ErrorpageComponent,
    HomeComponent,
    NavigationComponent,
    ArticlesComponent,
    CardsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
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
        path: 'error',
        component: ErrorpageComponent,
      },
      {
        path: 'statistics',
        component: ListStatistics,
      },
      {
        path: '**',
        component: ErrorpageComponent,
      },
      
      

    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor () {}
 }
