import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { M2RoutingModule } from './m2-routing.module';

import { M2RouterOutletsComponent } from './compos/router-outlets/router-outlets.component';
import { Compo0Component } from './compos/compo0/compo0.component';
import { Compo1Component } from './compos/compo1/compo1.component';


// Components to export :
const aExportableComponents: Array<any> = [Compo0Component, Compo1Component, M2RouterOutletsComponent];

@NgModule({
  declarations: [...aExportableComponents],
  imports: [
    CommonModule,
    M2RoutingModule
  ],
  exports: aExportableComponents
})
export class M2Module { }
