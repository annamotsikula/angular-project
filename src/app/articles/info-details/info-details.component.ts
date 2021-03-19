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
    if(title){
      this._service.getOne(title).subscribe((res: IResponse) => {
        this.article = res.articles[0];
      });
    }  

    
  }

}
