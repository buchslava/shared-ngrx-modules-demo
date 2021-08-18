import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FirstRoutingModule } from './first-routing.module';
import { ContainerComponent } from './container/container.component';


@NgModule({
  declarations: [
    ContainerComponent
  ],
  imports: [
    CommonModule,
    FirstRoutingModule
  ]
})
export class FirstModule { }
