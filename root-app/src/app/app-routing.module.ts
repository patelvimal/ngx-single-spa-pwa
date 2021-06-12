import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CountriesComponent } from './countries/countries.component';
import { EmptyRouteComponent } from '../../../micro-app-1/src/app/empty-route/empty-route.component';


const routes: Routes = [
  { path: 'home', component: CountriesComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {path:'**', component:EmptyRouteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
