import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cake } from './cake';
import { Rating } from './rating';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _api: HttpClient) { }

  getCakes(): Observable<Cake[]> {
    return this._api.get<Cake[]>('/cakes');
  }

  addCake(cake: Cake): Observable<Cake> {
    console.log('cake in service: ', cake);
    return this._api.post<Cake>('/cakes', cake);
  }

  addRating(rating: Rating, cakeId: number): Observable<Rating> {
    return this._api.post<Rating>(`/ratings/${cakeId}`, rating);
  }
}
