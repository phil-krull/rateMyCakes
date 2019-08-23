import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Cake } from '../cake';
import { Rating } from '../rating';
import { NgForm } from '@angular/forms';
import { BehaviorSubject, ReplaySubject } from 'rxjs';

@Component({
  selector: 'app-cake-index',
  templateUrl: './cake-index.component.html',
  styleUrls: ['./cake-index.component.css']
})
export class CakeIndexComponent implements OnInit {
  @Input() cakes: ReplaySubject<Cake>;
  @Output() showOneEvent = new EventEmitter();
  allCakes: Cake[] = [];

  constructor() { }

  ngOnInit() {
    this.cakes.forEach(cake => this.allCakes.push(cake));
  }

  showOne(cake: Cake): void {
    this.showOneEvent.emit(cake);
  }

}
