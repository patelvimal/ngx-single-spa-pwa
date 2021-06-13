import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProductComponent } from './product/product.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { MaterialModule } from './material.module';
import { APP_BASE_HREF, CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    ProductDetailComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [{provide: APP_BASE_HREF, useValue: '/app2'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
