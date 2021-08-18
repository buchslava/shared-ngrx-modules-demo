import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SecondRoutingModule } from './second-routing.module';
import { ContainerComponent } from './container/container.component';


@NgModule({
  declarations: [
    ContainerComponent
  ],
  imports: [
    CommonModule,
    SecondRoutingModule
  ]
})
export class SecondModule { }
