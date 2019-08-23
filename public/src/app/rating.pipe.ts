import { Pipe, PipeTransform } from '@angular/core';
import { Rating } from './rating';

@Pipe({
  name: 'rating'
})
export class RatingPipe implements PipeTransform {

  transform(ratings: Rating[], args?: any): any {
    return Math.round(ratings.reduce((sum ,b) => sum + b.rating, 0)/ratings.length * 100)/100 || 0;
  }

}
