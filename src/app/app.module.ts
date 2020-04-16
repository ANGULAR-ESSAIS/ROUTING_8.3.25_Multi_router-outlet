import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { M1Module } from './modules/M1/m1.module';
import { M2Module } from './modules/M2/m2.module';

import { AppComponent } from './app.component';
import { RouterOutletsComponent } from './compos/router-outlets/router-outlets.component';

import { Compo0Component } from './compos/compo0/compo0.component';
import { Compo1Component } from './compos/compo1/compo1.component';


@NgModule({
  declarations: [
    AppComponent,
    RouterOutletsComponent,

    Compo0Component,
    Compo1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    M1Module,
    M2Module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
