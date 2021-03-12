import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { IArticle, IResponse} from "../articles";
import {ArticleService} from "../articles.service"
@Component({
  selector: 'app-info-details',
  templateUrl: './info-details.component.html',
  styleUrls: ['./info-details.component.scss']
})
export class InfoDetailsComponent implements OnInit {
  article: IArticle;

  constructor(private route: ActivatedRoute, private _service: ArticleService) { }

  ngOnInit(): void {
    const title = this.route.snapshot.paramMap.get('title');
    this._service.getAllArticles().subscribe((res: IResponse) => {
      if (res.status ==='ok' && title) {
        const currentArticle: IArticle = res.articles.find((item: IArticle) => {
          return item.title.match(title);
        })
        this.article = currentArticle;
      }
    })

    
  }

}
