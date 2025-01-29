import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedRoutingModule } from './shared-routing.module';
import { PopUpComponent } from '../components/pop-up/pop-up.component';

@NgModule({
  declarations: [PopUpComponent ],
  imports:[CommonModule,SharedRoutingModule],
  exports:[PopUpComponent ]
})
export class SharedModule { }
