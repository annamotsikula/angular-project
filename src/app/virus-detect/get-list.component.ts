import { Component, OnInit } from '@angular/core';
import {UsersService} from './users.service';
import {ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-get-list',
  templateUrl: './get-list.component.html',
  styleUrls: ['./get-list.component.scss']
})
export class GetListComponent implements OnInit {
  data: Array<any>;
  totalUsers: number;
  currentPageNumber: number = 1;

  constructor(private _randomUser: UsersService, private _router: ActivatedRoute) {
    
    this.data = new Array<any>();
  }
  getPatients() {
    this._randomUser.getUser().subscribe((data) => {
      console.log();
      this.data = data.results;
      this.totalUsers = data.results.length
     
      
    })
  }
  ngOnInit(): void {
  }

}
