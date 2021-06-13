import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { CommonModule } from '@angular/common';

const routes: Routes = [ 
  { path: 'product', component: ProductComponent},
  { path: '', redirectTo: '/product', pathMatch: 'full' },
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
