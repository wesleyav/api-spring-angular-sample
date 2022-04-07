import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { first, tap } from 'rxjs/operators';

import { City } from '../entity/city';

@Injectable({
  providedIn: 'root',
})
export class CitiesService {

  private readonly API = '/assets/cities.json';

  constructor(private httpClient: HttpClient) {}

  findAll() {
    return this.httpClient.get<City[]>(this.API)
    .pipe(
      first(),
      tap(cities => console.log(cities))
    );
  }
}
