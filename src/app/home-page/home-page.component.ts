import { Component, ViewChild } from '@angular/core';
import { StarWarsService } from '../services/star-wars.service';
import { NgxSpinnerComponent, NgxSpinnerService } from 'ngx-spinner';
import { HttpClient } from '@angular/common/http';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { MatToolbarModule } from '@angular/material/toolbar';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { heroInterface } from '../heroInterface';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatPaginatorModule, FormsModule, MatToolbarModule, 
            NgxSpinnerComponent, MatTableModule, RouterOutlet, HomePageComponent, RouterLink],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {

  title = 'starWars';
  isFavorite : boolean = false;
  characters:heroInterface[]= [];
  heroName : string = "";
  displayedColumns: string[] = ['name', 'height', 'weight', 'wishList'];
  dataSource = new MatTableDataSource(this.characters);
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  clonedCharacters = [];
  favouriteHeroes:any[] = []; // marked Favourites
  

  constructor(private http:HttpClient, private spinner: NgxSpinnerService, private starService : StarWarsService, private route: Router){}

  ngOnInit(){
    this.dataSource.paginator = this.paginator;
}

  ngAfterViewInit(){
    this.dataSource.paginator = this.paginator;
  }

  find(){
    let filteredHero :any = this.characters.find((element:any) => element.name == this.heroName);
    
    if(filteredHero) {
      this.characters = [];
      this.characters.push(filteredHero);
    
      localStorage.setItem("filteredCharacterName", this.heroName);
      localStorage.setItem('filteredCharachterDetails', JSON.stringify(this.characters));
    }
    
  }

  // Using for compare (preserving favoruites)
  commonMethodMarkedFavourites(apiResponse ){
    let markedFavourites = JSON.parse(localStorage.getItem('myFavourites'));
    let apiData = apiResponse;

    let i=0; 
    apiData?.forEach(element => {
      markedFavourites?.forEach(element1 => {
        if(element.name === element1.name){
          console.log(i);
          console.log(apiData[i]);
          apiData[i].isFavourite = true;
        }
      })
      i++;
    })

    return apiData;
  }

  // fetch characters Method..
  starWars(){
    this.heroName = localStorage.getItem("filteredCharacterName");
    this.characters = JSON.parse(localStorage.getItem('filteredCharachterDetails'));

    // reserving filtering
    if(this.heroName && this.characters){
      return;
    }
    
    if(JSON.parse(localStorage.getItem("characters"))){
      this.characters = JSON.parse(localStorage.getItem("characters"));
      this.commonMethodMarkedFavourites(this.characters);
      return;
    }

    this.spinner.show();
      this.http.get(`https://swapi.dev/api/people`).subscribe((res:any) => {
      if(res.hasOwnProperty('results')){
      this.spinner.hide();
      let newResp = this.commonMethodMarkedFavourites(res['results']);
      this.characters = newResp;
      this.clonedCharacters = [...this.characters];
      localStorage.setItem("characters", JSON.stringify(this.characters));
    }
  })
}

  markFavourite(selectedElement:any){
    if(localStorage.getItem('myFavourites')) {
      this.favouriteHeroes = JSON.parse(localStorage.getItem('myFavourites'));
    } else {
      this.favouriteHeroes = [];
    }
    // Removing Favourite
      let index = this.favouriteHeroes.findIndex(element => element.name === selectedElement.name);
      if(index > -1) {
        delete selectedElement['isFavourite'];
        this.favouriteHeroes.splice(index,1);
      } else {
            //Making as Favourite
      selectedElement['isFavourite'] = true;
      this.favouriteHeroes.push(selectedElement);
      }
    localStorage.setItem("myFavourites", JSON.stringify(this.favouriteHeroes));
    }

    routeToFavourites(){
      this.route.navigate(['/favourites']);
    }

    resetAll(){
      this.heroName = "";
      localStorage.removeItem("filteredCharacterName");
      localStorage.removeItem("filteredCharachterDetails");
      localStorage.removeItem("characters");
     // favoruites can be removed globally, as per condition.
     /* 
     localStorage.removeItem("myFavourites");
     */
      this.starWars();
    }

    pagination($event:any){
      console.log($event);
      let pageIndex = $event.pageIndex+1;
      this.route.navigate(['/home']);
      this.spinner.show();
       this.characters = JSON.parse(localStorage.getItem('characters'));
        this.starService.fetchHeroes(pageIndex).subscribe((res:any) => {
          this.spinner.hide();
          if(res.hasOwnProperty('results')){
            let newResp = this.commonMethodMarkedFavourites(res['results']);
            this.characters = newResp;
            this.clonedCharacters = [...this.characters];
            localStorage.setItem("characters", JSON.stringify(this.characters));
          }
        })
    }


    // pageSizeBasedSorting(pageSize){
    //   this.characters = [];
    //   this.characters = [...this.clonedCharacters];
    //   this.characters = this.characters.slice(0, pageSize);
    // }

}