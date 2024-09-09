import { Routes } from '@angular/router';
import { HeroDetailsInfoComponent } from './hero-details-info/hero-details-info.component';
import { HomePageComponent } from './home-page/home-page.component';
import { FavouriteComponentComponent } from './favourite-component/favourite-component.component';

export const routes: Routes = [
    {path : '', redirectTo : '/home', pathMatch : 'full'},
    {path : 'home', component : HomePageComponent},
    {
    path : 'characterInfo/:heroName', component : HeroDetailsInfoComponent
}, 
{path : 'favourites', component : FavouriteComponentComponent}
];
