import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Compo0Component } from './compos/compo0/compo0.component';
import { Compo1Component } from './compos/compo1/compo1.component';

import * as M2 from './../M2/compos/allCompos';

// import { M2Compo0Component } from './../M2/compos/compo0/compo0.component';
// import { M2Compo1Component } from './../M2/compos/compo1/compo1.component';


const routes: Routes = [

  // ========================================================================
  // ===================== M1Module_Module Components =======================
  // dans le router-outlet de M1Module.
  // ========================================================================

  // ============ Composant : M1Module - Compo0 ============

  { // Syntaxe URL : (M1_router_outlet_1:M1Module_compo0_in_M1Module_router_outlet_1)
    path: 'M1Module_compo0_in_M1Module_router_outlet_1',
    component: Compo0Component,  // Sera donc chargé dans le <router-outlet> de name M1_router_outlet_1 (de M1Module).
    outlet: 'M1_router_outlet_1'
  },


  // ============ Composant : M1Module - Compo1 ============

  { // Syntaxe URL : (M1_router_outlet_1:M1Module_compo1_in_M1Module_router_outlet_1)
    path: 'M1Module_compo1_in_M1Module_router_outlet_1',
    component: Compo1Component,  // Sera donc chargé dans le <router-outlet> de name M1_router_outlet_1 (de M1Module).
    outlet: 'M1_router_outlet_1'
  },


  // ========================================================================
  // ===================== M2Module_Module Components =======================
  // dans le router-outlet de M1Module.
  // ========================================================================

  // ============ Composant : M2Module - Compo0 ============

  { // Syntaxe URL : (M1_router_outlet_1:M2Module_compo0_in_M1Module_router_outlet_1)
    path: 'M2Module_compo0_in_M1Module_router_outlet_1',
    component: M2.M2Compo0Component,  // Sera donc chargé dans le <router-outlet> de name M1_router_outlet_1 (de M1Module).
    outlet: 'M1_router_outlet_1'
  },


  // ============ Composant : M2Module - Compo1 ============

  { // Syntaxe URL : (M1_router_outlet_1:M2Module_compo1_in_M1Module_router_outlet_1)
    path: 'M2Module_compo1_in_M1Module_router_outlet_1',
    component: M2.M2Compo1Component,  // Sera donc chargé dans le <router-outlet> de name M1_router_outlet_1 (de M1Module).
    outlet: 'M1_router_outlet_1'
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class M1RoutingModule { }
