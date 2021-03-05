import { Component, OnInit, Input } from '@angular/core';
import { IArticle } from '../articles';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {
  @Input() article?: IArticle;
  constructor() { }

  ngOnInit(): void {
    console.log(this.article)
  }

}
