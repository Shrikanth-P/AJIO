import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-counterchild',
  templateUrl: './counterchild.component.html',
  styleUrls: ['./counterchild.component.css']
})
export class CounterchildComponent implements OnInit {

  @Input() counterValue: number = 1;
  countLessThenOne = true;
  @Output() countEmitter = new EventEmitter();
  @Output() quantityEmitter = new EventEmitter();
  PostData() {
    this.countEmitter.emit(this.counterValue);
    this.quantityEmitter.emit(this.counterValue);
  }

  //increment and decrement 

  //Quantity -> 10
  decrement() {
    if (this.counterValue == 1) {
      this.countLessThenOne = false;
    }
    else {
      this.countLessThenOne = true;
      this.counterValue--;
    }
    this.PostData();
  }

  increment() {
    this.counterValue++;
    this.countLessThenOne = true;
    this.PostData();
  }
  
  constructor() { }
  
  ngOnInit(): void {
  }
}
