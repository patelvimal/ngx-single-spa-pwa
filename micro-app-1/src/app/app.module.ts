import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { AppRoutingModule } from './app-routing.module';
import { Componenet1Component } from './componenet1/componenet1.component';
import { Componenet2Component } from './componenet2/componenet2.component';
import { Componenet3Component } from './componenet3/componenet3.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    Componenet1Component,
    Componenet2Component,
    Componenet3Component
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
