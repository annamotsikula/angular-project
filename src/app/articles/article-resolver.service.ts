import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
//import {catchError} from 'rxjs/operators';
import {Resolve, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import { ArticleService } from './articles.service';
import {IResponse, IArticle} from './articles';
import { FormsFilter } from '../data/filter-data.interface';


@Injectable({
    providedIn: 'root',
})
export class ArticleResolver implements Resolve<IResponse> {
    constructor(private _service: ArticleService) {}
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IResponse> {
        const formFilter: FormsFilter = {
            qInTitle: "covid19",
            pageSize: 20,
            page: 1
        
          };
        const theme: string = new URLSearchParams(formFilter as any).toString();

    return this._service.getAllArticles(theme)
    //.pipe(catchError((err)=>{of(err)}));
    }

}