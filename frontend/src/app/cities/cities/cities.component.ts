import { Component, OnInit } from '@angular/core';

import { City } from '../entity/city';
import { CitiesService } from '../services/cities.service';

@Component({
  selector: 'app-cities',
  templateUrl: './cities.component.html',
  styleUrls: ['./cities.component.scss'],
})
export class CitiesComponent implements OnInit {
  cities: City[] = [];
  displayedColumns = ['city', 'last_update'];

  constructor(private citiesService: CitiesService) {
    this.cities = this.citiesService.findAll();
  }

  ngOnInit(): void {}
}
