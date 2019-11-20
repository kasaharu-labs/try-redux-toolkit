import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CounterComponent } from './ui/counter/counter.component';



@NgModule({
  declarations: [CounterComponent],
  imports: [
    CommonModule
  ]
})
export class CounterModule { }
