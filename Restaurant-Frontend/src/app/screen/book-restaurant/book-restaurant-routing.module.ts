import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterOwnerComponent } from './component/register-owner/register-owner.component';
import { RegisterRestaurantComponent } from './component/register-restaurant/register-restaurant.component';
const routes: Routes = [
  {
    path : '',
    component : RegisterRestaurantComponent
  },
  {
    path : 'owner',
    component : RegisterOwnerComponent
  },{
    path : 'restaurant',
    component : RegisterRestaurantComponent
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class BookRestaurantRoutingModule { }
