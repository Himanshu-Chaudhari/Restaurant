import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookRestaurantRoutingModule } from './book-restaurant-routing.module';
import { FormComponent } from './component/form/form.component';
import { FooterComponent } from './component/footer/footer.component';
import { PopUpComponent } from 'src/app/components/pop-up/pop-up.component';

@NgModule({
  declarations: [
    FormComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    BookRestaurantRoutingModule,
  ]
})
export class BookRestaurantModule { }
