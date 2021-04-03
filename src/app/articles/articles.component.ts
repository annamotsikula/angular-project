import { Component, OnInit } from '@angular/core';
import { ArticleService } from './articles.service';
import {IResponse, IArticle} from './articles';
import { NgForm } from "@angular/forms";

import {ActivatedRoute, Router} from '@angular/router'
import { FormsFilter } from '../data/filter-data.interface';


@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss']
})
export class ArticlesComponent implements OnInit {
  wholeInfo: IArticle[] = [];
  formFilter: FormsFilter = this._ArticleService.formFilter;
  
  constructor(private _ArticleService: ArticleService, private _router: ActivatedRoute, private route: Router) { }

  ngOnInit(): void {
    const result: IResponse = this._router.snapshot.data['responseOfArticles'];

    this.wholeInfo = result.articles;
    
  }
  private newTheme() {

    const theme: string = new URLSearchParams(this.formFilter as any).toString();
    
    const paramsInUrl = {
      ...this.formFilter,
      title: this.formFilter.qInTitle,
      page: this.formFilter.page,
      pageSize: this.formFilter.pageSize
    }
    this.route.navigate([], {
      queryParamsHandling: 'merge',
      queryParams: paramsInUrl,
      replaceUrl: true,

    })

  
    this._ArticleService.getAllArticles(theme).subscribe((res: IResponse) => {
      if (res.status = 'ok'){
        this.wholeInfo = res.articles;
      }
    });

  }
  Onsubmit(form: NgForm) {
    this.newTheme();
  }
}
