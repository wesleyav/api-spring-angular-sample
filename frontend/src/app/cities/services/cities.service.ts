import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { City } from '../entity/city';

@Injectable({
  providedIn: 'root',
})
export class CitiesService {

  constructor(private httpClient: HttpClient) {}

  findAll(): City[] {
    return [{ city_id: '1', city: 'São Paulo', last_update: '2022-04-06' }];
  }
}
