import { Component, OnInit } from '@angular/core';
import { Cake } from './cake';
import { HttpService } from './http.service';
import { ReplaySubject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title: string = 'public';
  cake: Cake;

  allCakes: ReplaySubject<Cake> = new ReplaySubject();

  constructor(private _httpService: HttpService) {}

  ngOnInit(): void {
    this._httpService.getCakes().subscribe(cakes => {
      cakes.forEach(cake => this.allCakes.next(cake));
    }, err => console.log(err));
  }

  showOneEvent(cake: Cake) {
    this.cake = cake;
  }

}
