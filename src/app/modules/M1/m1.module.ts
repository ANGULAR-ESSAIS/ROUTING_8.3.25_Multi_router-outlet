import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { M1RoutingModule } from './m1-routing.module';
import { M2Module } from '../M2/m2.module';

import { M1RouterOutletsComponent } from './compos/router-outlets/router-outlets.component';
import { Compo0Component } from './compos/compo0/compo0.component';
import { Compo1Component } from './compos/compo1/compo1.component';

// Components to export :
const aExportableComponents: Array<any> = [Compo0Component, Compo1Component, M1RouterOutletsComponent];

@NgModule({
  declarations: [...aExportableComponents],
  imports: [
    CommonModule,
    M1RoutingModule,

    M2Module
  ],
  exports: aExportableComponents
})
export class M1Module { }
