import { Component, OnInit } from '@angular/core';

import { City } from '../entity/city';

@Component({
  selector: 'app-cities',
  templateUrl: './cities.component.html',
  styleUrls: ['./cities.component.scss'],
})
export class CitiesComponent implements OnInit {

  cities: City[] = [
    { city_id: '1', city: 'São Paulo', last_update: '2022-04-06'}
  ];
  displayedColumns = ['city', 'last_update'];

  constructor() {}

  ngOnInit(): void {}
}
