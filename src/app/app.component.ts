import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, ViewChild } from '@angular/core';
import { ActivatedRoute, Route, RouterOutlet } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import {MatPaginatorModule, MatPaginator} from '@angular/material/paginator';
import { NgxSpinnerComponent, NgxSpinnerService } from "ngx-spinner";
import { FormsModule } from '@angular/forms';
import {MatToolbarModule} from '@angular/material/toolbar';
import { StarWarsService } from './services/star-wars.service';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { heroInterface } from './heroInterface';
import { HomePageComponent } from './home-page/home-page.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatToolbarModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {


  constructor(private route : Router){}


  redirect(){
    this.route.navigate(['/home']);
  }




}
