import { Component, OnInit, Input, DoCheck } from '@angular/core';
import { Cake } from 'src/app/cake';

@Component({
  selector: 'app-cake-show',
  templateUrl: './cake-show.component.html',
  styleUrls: ['./cake-show.component.css']
})
export class CakeShowComponent implements OnInit {
  @Input() cake:Cake;

  constructor() { }

  ngOnInit() { }

  ngDoCheck() {
    console.log('??????'); 
  }

}
