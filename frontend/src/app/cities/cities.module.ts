import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatTableModule } from '@angular/material/table';

import { CitiesRoutingModule } from './cities-routing.module';
import { CitiesComponent } from './cities/cities.component';


@NgModule({
  declarations: [
    CitiesComponent
  ],
  imports: [
    CommonModule,
    CitiesRoutingModule,
    MatTableModule
  ]
})
export class CitiesModule { }
