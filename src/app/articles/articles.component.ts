import { Component, OnInit } from '@angular/core';
import { ArticleService } from './articles.service';
import {IResponse, IArticle} from './articles';
import { NgForm } from "@angular/forms";
import { FormsFilter } from '../data/filter-data.interface';


@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss']
})
export class ArticlesComponent implements OnInit {
  wholeInfo: IArticle[] = [];
  formFilter: FormsFilter = {
    qInTitle: "covid19",
    pageSize: 20,
    page: 1

  };
  constructor(private _ArticleService: ArticleService) { }

  ngOnInit(): void {
    this.newTheme();
  }
  private newTheme() {
    const theme: string = new URLSearchParams(this.formFilter as any).toString();
    this._ArticleService.getAllArticles(theme).subscribe((res: IResponse) => {
      console.log(res);
      if (res.status = 'ok'){
        this.wholeInfo = res.articles;
      }
    });

  }
  Onsubmit(form: NgForm) {
    this.newTheme();
  }
}
