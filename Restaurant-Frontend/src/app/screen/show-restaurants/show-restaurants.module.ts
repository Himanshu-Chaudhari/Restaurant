import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShowRestaurantsRoutingModule } from './show-restaurants-routing.module';
import { RestoCardComponent } from './component/resto-card/resto-card.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    RestoCardComponent
  ],
  imports: [
    CommonModule,
    ShowRestaurantsRoutingModule,
    SharedModule
  ]
})
export class ShowRestaurantsModule { }
