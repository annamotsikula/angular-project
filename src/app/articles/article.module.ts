import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { ArticlesComponent } from './articles.component';
import { InfoDetailsComponent } from './info-details/info-details.component';
import { CardsComponent } from './cards/cards.component';
import { ArticleResolver } from "./article-resolver.service"
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ArticleInterceptor } from './article-interceptor';




@NgModule({
  declarations: [
    ArticlesComponent,
    CardsComponent,
    InfoDetailsComponent,

  ],
  imports: [
    CommonModule,
    FormsModule,
     RouterModule.forChild([
      {
        path: 'articles/',
        component: ArticlesComponent,
        resolve: {
          responseOfArticles: ArticleResolver
        }      }, 
      {
        path: 'articles/:title',
        component: InfoDetailsComponent,
      }, 
     ]),
 
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ArticleInterceptor,
      multi: true
    }
  ],
  exports: [ArticlesComponent],
})
export class ArticleModule { }
