import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';

const routes: Routes = [ 
{ path: '', redirectTo: '/product', pathMatch: 'full' },
{
  path: 'product',
  component: ProductComponent,
  children: [{ path: 'detail', component: ProductDetailComponent }],
}
];

@NgModule({
  imports: [RouterModule.forRoot([])],
  exports: [RouterModule]
})
export class AppRoutingModule { }
