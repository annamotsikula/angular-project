import { Component, OnInit } from '@angular/core';
import { ArticleService } from './articles.service';
import {IResponse, IArticle} from './articles'


@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss']
})
export class ArticlesComponent implements OnInit {
  wholeInfo: IArticle[] = [];
  constructor(private _ArticleService: ArticleService) { }

  ngOnInit(): void {
    this._ArticleService.getAllArticles().subscribe((res: IResponse) => {
      console.log(res);
      if (res.status = 'ok'){
        this.wholeInfo = res.articles;
      }
    });
  }

}
