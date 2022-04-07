import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AppMaterialModule } from '../shared/app-material/app-material.module';
import { CitiesRoutingModule } from './cities-routing.module';
import { CitiesComponent } from './cities/cities.component';


@NgModule({
  declarations: [
    CitiesComponent
  ],
  imports: [
    CommonModule,
    CitiesRoutingModule,
    AppMaterialModule
  ]
})
export class CitiesModule { }
