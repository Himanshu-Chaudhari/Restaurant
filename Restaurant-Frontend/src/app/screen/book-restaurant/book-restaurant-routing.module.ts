import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FooterComponent } from './component/footer/footer.component';
import { FormComponent } from './component/form/form.component';

const routes: Routes = [
  {
    path : 'footer',
    component : FooterComponent
  },
  {
    path : 'form',
    component : FormComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BookRestaurantRoutingModule { }
