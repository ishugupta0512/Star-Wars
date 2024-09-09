import { Component } from '@angular/core';
import { StarWarsService } from '../services/star-wars.service';
import { CommonModule } from '@angular/common';
import { elementAt } from 'rxjs';
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-favourite-component',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './favourite-component.component.html',
  styleUrl: './favourite-component.component.scss'
})
export class FavouriteComponentComponent {

  favouriteMarkedHeroes : any = [];
  allHeroes = [];
  result = [];

  constructor(private starService : StarWarsService){}


  // name, height, weight/mass, birth year, gender, homeworld, list of films
  ngOnInit(){
    this.result = JSON.parse(localStorage.getItem("myFavourites"));
    console.log(this.result);
  }

}
