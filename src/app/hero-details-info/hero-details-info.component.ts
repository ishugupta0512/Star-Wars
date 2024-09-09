import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-hero-details-info',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './hero-details-info.component.html',
  styleUrl: './hero-details-info.component.scss'
})
export class HeroDetailsInfoComponent {

  character : string = "";
  mappedDetails :any[] = [];
  characterObj:any = {};
  constructor(private activateRoute : ActivatedRoute){}

  ngOnInit(){
    this.activateRoute.params.subscribe((res:any) => {
      this.character = res.heroName;
    });

    let data = localStorage.getItem('characters');
    this.mappedDetails = JSON.parse(data);
    console.log(this.mappedDetails);

    if(this.mappedDetails && this.mappedDetails.length > 0){
     this.characterObj  = this.mappedDetails.find(element => element.name == this.character);
    }

  }

}
