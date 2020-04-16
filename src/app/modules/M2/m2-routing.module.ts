import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { M2Compo0Component } from './compos/compo0/compo0.component';
import { M2Compo1Component } from './compos/compo1/compo1.component';


const routes: Routes = [

  // ========================================================================
  // ===================== M2Module_Module Components =======================
  // dans le router-outlet de M2Module.
  // ========================================================================

  // ============ Composant : M2Module - Compo0 ============

  { // Syntaxe URL : (M2_router_outlet_1:M2Module_compo0_in_M2Module_router_outlet_1)
    path: 'M2Module_compo0_in_M2Module_router_outlet_1',
    component: M2Compo0Component,  // Sera donc chargé dans le <router-outlet> de name M2_router_outlet_1 (de M2Module).
    outlet: 'M2_router_outlet_1'
  },


  // ============ Composant : M2Module - Compo1 ============

  { // Syntaxe URL : (M2_router_outlet_1:M2Module_compo1_in_M2Module_router_outlet_1)
    path: 'M2Module_compo1_in_M2Module_router_outlet_1',
    component: M2Compo1Component,  // Sera donc chargé dans le <router-outlet> de name M2_router_outlet_1 (de M2Module).
    outlet: 'M2_router_outlet_1'
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class M2RoutingModule { }
