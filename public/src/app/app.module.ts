import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CakeIndexComponent } from './cake-index/cake-index.component';
import { CakeNewComponent } from './cake-new/cake-new.component';
import { CakeShowComponent } from './cake-index/cake-show/cake-show.component';
import { HttpService } from './http.service';
import { RatingNewComponent } from './cake-index/rating-new/rating-new.component';
import { RatingPipe } from './rating.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CakeIndexComponent,
    CakeNewComponent,
    CakeShowComponent,
    RatingNewComponent,
    RatingPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
