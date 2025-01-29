import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookRestaurantModule } from './screen/book-restaurant/book-restaurant.module';
import { ShowRestaurantsModule } from './screen/show-restaurants/show-restaurants.module';
import { PopUpComponent } from './components/pop-up/pop-up.component';
import { SharedModule } from './shared/shared.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BookRestaurantModule,
    ShowRestaurantsModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
