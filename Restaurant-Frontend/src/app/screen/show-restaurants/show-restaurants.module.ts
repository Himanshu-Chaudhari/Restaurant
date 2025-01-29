import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShowRestaurantsRoutingModule } from './show-restaurants-routing.module';
import { RestoCardComponent } from './component/resto-card/resto-card.component';


@NgModule({
  declarations: [
    RestoCardComponent
  ],
  imports: [
    CommonModule,
    ShowRestaurantsRoutingModule
  ]
})
export class ShowRestaurantsModule { }
