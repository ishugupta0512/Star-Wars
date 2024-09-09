import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StarWarsService {

  private URL = "https://swapi.dev/api/people";
  favouriteHeroesSubject = new BehaviorSubject<any>(null);

  constructor(private http: HttpClient) { }

  // fetch heros:

  fetchHeroes(page : Number = 1){
    return this.http.get(`${this.URL}?page=${page}`);
  }

}
