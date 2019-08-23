import { Component, OnInit, Input } from '@angular/core';
import { Rating } from 'src/app/rating';
import { HttpService } from 'src/app/http.service';
import { Cake } from 'src/app/cake';
import { ReplaySubject } from 'rxjs';

@Component({
  selector: 'app-rating-new',
  templateUrl: './rating-new.component.html',
  styleUrls: ['./rating-new.component.css']
})
export class RatingNewComponent implements OnInit {
  @Input() cake: Cake;
  rating: Rating = new Rating();

  constructor(private _httpService: HttpService) { }

  ngOnInit() {
  }

  addRating() {
    this._httpService.addRating(this.rating, this.cake._id).subscribe((rating)=> {
      console.log(rating);
      this.cake.ratings.push(this.rating);
      this.rating = new Rating();
    }, (error)=>{
      console.log(error);
      
    })
  }

}
