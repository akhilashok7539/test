import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AddPointsComponent } from './destinationpoints/add-points/add-points.component';
import { ProfileComponent } from './profile/profile.component';
import { CovidTrackerComponent } from './covid-tracker/covid-tracker.component';


const routes: Routes = [
  { path: '', redirectTo: '/Home', pathMatch: 'full' },
  { path: 'Home', component: HomeComponent },
  { path: 'add-destination', component: AddPointsComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'covidtracker', component: CovidTrackerComponent },



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
