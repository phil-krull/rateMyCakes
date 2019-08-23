import { Component, OnInit, Input } from '@angular/core';
import { Cake } from '../cake';
import { HttpService } from '../http.service';
import { BehaviorSubject, ReplaySubject } from 'rxjs';

@Component({
  selector: 'app-cake-new',
  templateUrl: './cake-new.component.html',
  styleUrls: ['./cake-new.component.css']
})
export class CakeNewComponent implements OnInit {
  @Input() cakes: ReplaySubject<Cake>;
  cake: Cake = new Cake();

  constructor(private _httpService: HttpService) { }

  ngOnInit() {
  }

  addCake() {
    console.log(this.cake);
    this._httpService.addCake(this.cake).subscribe(c => {
      console.log(c);
      this.cakes.next(c);
      this.cake = new Cake();
    }, err => console.log(err))
  }

}
