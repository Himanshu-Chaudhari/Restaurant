import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RestoCardComponent } from './component/resto-card/resto-card.component';

const routes: Routes = [
  {
    path : '',
    component : RestoCardComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShowRestaurantsRoutingModule { }
