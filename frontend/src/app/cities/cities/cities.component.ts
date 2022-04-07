import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { City } from '../entity/city';
import { CitiesService } from '../services/cities.service';

@Component({
  selector: 'app-cities',
  templateUrl: './cities.component.html',
  styleUrls: ['./cities.component.scss'],
})
export class CitiesComponent implements OnInit {
  cities: Observable<City[]>;
  displayedColumns = ['city', 'last_update'];

  constructor(private citiesService: CitiesService) {
    this.cities = this.citiesService.findAll();
  }

  ngOnInit(): void {}
}
