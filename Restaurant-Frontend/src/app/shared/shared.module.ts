import { NgModule } from '@angular/core';
import { CardComponent } from '../components/card/card.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [ CardComponent],
  imports:[CommonModule , FormsModule],
  exports:[ CardComponent ]
})
export class SharedModule { }
