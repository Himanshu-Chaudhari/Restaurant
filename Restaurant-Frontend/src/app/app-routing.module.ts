import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{
    path : "",
    loadChildren : () => import('./screen/dashboard/dashboard.module').then((module)=>module.DashboardModule)
  },
  {
    path : "add",
    loadChildren : () => import('./screen/book-restaurant/book-restaurant.module').then((module)=>module.BookRestaurantModule)
  },{
    path : "showRestaurant",
    loadChildren : () => import('./screen/show-restaurants/show-restaurants.module').then((module)=>module.ShowRestaurantsModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
