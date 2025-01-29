import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookRestaurantRoutingModule } from './book-restaurant-routing.module';
import { FormComponent } from './component/form/form.component';
import { FooterComponent } from './component/footer/footer.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    FormComponent,
    FooterComponent,
  ],
  imports: [
    CommonModule,
    BookRestaurantRoutingModule,
    SharedModule
  ]
})
export class BookRestaurantModule { }
