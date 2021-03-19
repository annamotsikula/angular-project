import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { ArticlesComponent } from './articles.component';
import { InfoDetailsComponent } from './info-details/info-details.component';
import { CardsComponent } from './cards/cards.component';




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
      }, 
      {
        path: 'articles/:title',
        component: InfoDetailsComponent,
      }, 
     ]),
 
  ],
  exports: [ArticlesComponent],
})
export class ArticleModule { }
