import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CountriesComponent } from './countries/countries.component';


const routes: Routes = [
  { path: 'home', component: CountriesComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
