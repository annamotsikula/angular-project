import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {Resolve, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import { ArticleService } from './articles.service';
import {IResponse, IArticle} from './articles';
import { FormsFilter } from '../data/filter-data.interface';
import { catchError } from 'rxjs/operators';


@Injectable({
    providedIn: 'root',
})
export class ArticleResolver implements Resolve<IResponse> {
    constructor(private _service: ArticleService) {}
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IResponse> {
        const page: any = route.queryParamMap.get('page') || 1;
        const pageSize: any = route.queryParamMap.get('pageSize') || 20;
        const qInTitle: any = route.queryParamMap.get('title') || 'covid19';
        const sortBy: any = route.queryParamMap.get('Popularity') || "";



        const formFilter: FormsFilter = {
            qInTitle,
            pageSize,
            page,
            sortBy
        
          };
        const theme: string = new URLSearchParams(formFilter as any).toString();

    return this._service.getAllArticles(theme)

    }

}