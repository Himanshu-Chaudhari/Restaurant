import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookRestaurantRoutingModule } from './book-restaurant-routing.module';
import { RegisterOwnerComponent } from './component/register-owner/register-owner.component';
import { RegisterRestaurantComponent } from './component/register-restaurant/register-restaurant.component';
import { SharedModule } from '../../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    RegisterOwnerComponent,
    RegisterRestaurantComponent,
  ],
  imports: [
    CommonModule,
    BookRestaurantRoutingModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class BookRestaurantModule { }
