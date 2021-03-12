import { Component, OnInit, ViewChild } from "@angular/core";
import { IStatistics } from './list-statistics'; 
import { ListService } from "./list-statistics.service";



@Component ({
    selector: "app-statistics",
    templateUrl: "./list-statistics.component.html",
    styleUrls: ["./list-statistics.component.scss"],
})

export class ListStatistics implements OnInit {
    private searchPrivate: string = "";
    showList: boolean = true;
    filteredList: IStatistics [] = [];
    countryList: IStatistics[] = [];
    constructor(private _listService: ListService ) {
        
    }
    ngOnInit(): void {
        this.countryList = this._listService.getList();
        this.searchValue = '';
    };

    showOrhide(): void {
        this.showList = !this.showList
    };
    
    get searchValue(): string {
        return this.searchPrivate;
    }
    set searchValue(value:string) {
         this.searchPrivate=value;
         if(this.searchPrivate) {
            this.filteredList = this.countryList.filter((el) => {
               return el.name.toLocaleLowerCase().includes(this.searchPrivate.toLocaleLowerCase()) ||
                    el.caseTotal.includes(this.searchPrivate) ||
                    el.recoveredTotal.includes(this.searchPrivate) 
            });
         } else {
             this.filteredList = this.countryList.slice();
         }
         
    }
} 


