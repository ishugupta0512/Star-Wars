import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePageComponent } from './home-page.component';
import { HttpClient, provideHttpClient } from '@angular/common/http';
import { NgModel } from '@angular/forms';
import { NgModule } from '@angular/core';


describe('HomePageComponent', () => {
  let component: HomePageComponent;
  let fixture: ComponentFixture<HomePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomePageComponent, provideHttpClient()]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // preserveFavouriteHeroes(){
  //   let ishuChara = [];
  //   let item = JSON.parse(localStorage.getItem("markedFavourite"));
  //   for(let element of this.characters){
  //     for(let element1 of item){
  //       if(element.name == element1.name){
  //         ishuChara.push(element);
  //       }
  //     }
  //   }
  //   ishuChara.forEach(element => {
  //     element['isFavourite'] = true;
  //   })
  // }

  it('should preserver Favourite characters', () => {
    component.characters = [
      {
        "name": "Luke Skywalker",
        "height": "172",
        "mass": "77",
        "hair_color": "blond",
        "skin_color": "fair",
        "eye_color": "blue",
        "birth_year": "19BBY",
        "gender": "male",
        "homeworld": "https://swapi.dev/api/planets/1/",
        "films": [
          "https://swapi.dev/api/films/1/",
          "https://swapi.dev/api/films/2/",
          "https://swapi.dev/api/films/3/",
          "https://swapi.dev/api/films/6/"
        ],
        "species": [],
        "vehicles": [
          "https://swapi.dev/api/vehicles/14/",
          "https://swapi.dev/api/vehicles/30/"
        ],
        "starships": [
          "https://swapi.dev/api/starships/12/",
          "https://swapi.dev/api/starships/22/"
        ],
        "created": "2014-12-09T13:50:51.644000Z",
        "edited": "2014-12-20T21:17:56.891000Z",
        "url": "https://swapi.dev/api/people/1/"
      },
      {
        "name": "Anakin Skywalker",
        "height": "188",
        "mass": "84",
        "hair_color": "blond",
        "skin_color": "fair",
        "eye_color": "blue",
        "birth_year": "41.9BBY",
        "gender": "male",
        "homeworld": "https://swapi.dev/api/planets/1/",
        "films": [
          "https://swapi.dev/api/films/4/",
          "https://swapi.dev/api/films/5/",
          "https://swapi.dev/api/films/6/"
        ],
        "species": [],
        "vehicles": [
          "https://swapi.dev/api/vehicles/44/",
          "https://swapi.dev/api/vehicles/46/"
        ],
        "starships": [
          "https://swapi.dev/api/starships/39/",
          "https://swapi.dev/api/starships/59/",
          "https://swapi.dev/api/starships/65/"
        ],
        "created": "2014-12-10T16:20:44.310000Z",
        "edited": "2014-12-20T21:17:50.327000Z",
        "url": "https://swapi.dev/api/people/11/"
      }
    ]

      let data = [{
        "name": "Luke Skywalker",
        "height": "172",
        "mass": "77",
        "hair_color": "blond",
        "skin_color": "fair",
        "eye_color": "blue",
        "birth_year": "19BBY",
        "gender": "male",
        "homeworld": "https://swapi.dev/api/planets/1/",
        "films": [
          "https://swapi.dev/api/films/1/",
          "https://swapi.dev/api/films/2/",
          "https://swapi.dev/api/films/3/",
          "https://swapi.dev/api/films/6/"
        ],
        "species": [],
        "vehicles": [
          "https://swapi.dev/api/vehicles/14/",
          "https://swapi.dev/api/vehicles/30/"
        ],
        "starships": [
          "https://swapi.dev/api/starships/12/",
          "https://swapi.dev/api/starships/22/"
        ],
        "created": "2014-12-09T13:50:51.644000Z",
        "edited": "2014-12-20T21:17:56.891000Z",
        "url": "https://swapi.dev/api/people/1/",
        "isFavourite" : true
      }]

      localStorage.setItem("markedFavourite", JSON.stringify(data));
      expect(component.characters[0].isFavorite).toBe(true);


  })



});
