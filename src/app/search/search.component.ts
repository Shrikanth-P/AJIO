import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  value : string= "";
  @Output() public searchevent = new EventEmitter();
  fireEvent(){
    this.searchevent.emit(this.value);
    alert(this.value)
  }
  constructor() { }

  ngOnInit(): void {
  }
 
}
