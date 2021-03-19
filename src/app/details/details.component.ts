import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';




@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  @Input() details: boolean;
  @Output() onClick: EventEmitter<boolean> = new EventEmitter<boolean>();
  constructor() { }

  ngOnInit(): void {
  }

  ifchanged(): void {
       console.log("clicked")
  }

}
