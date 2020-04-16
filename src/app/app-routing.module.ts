import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Compo0Component } from './compos/compo0/compo0.component';
import { Compo1Component } from './compos/compo1/compo1.component';

import * as M1 from './modules/M1/compos/allCompos';
import * as M2 from './modules/M2/compos/allCompos';

// import { M2Compo1Component } from './modules/M2/compos/compo1/compo1.component';
// import { M2Compo0Component } from './modules/M2/compos/compo0/compo0.component';





const routes: Routes = [

  // ========================================================================
  // ===================== AppModule Components =============================
  // ========================================================================

  // ============ Composant : AppModule - Compo0 ============

  { // Syntaxe URL : AppModule_compo0
    path: 'AppModule_compo0',
    component: Compo0Component  // Sera donc chargé dans le <router-outlet> sans name (de AppModule).
  },

  { // Syntaxe URL : (AppModule_router_outlet_2:AppModule_compo0_in_AppModule_router_outlet_2)
    path: 'AppModule_compo0_in_AppModule_router_outlet_2',
    component: Compo0Component,  // Sera donc chargé dans le <router-outlet> de name AppModule_router_outlet_2 (de AppModule).
    outlet: 'AppModule_router_outlet_2'
  },
  { // Syntaxe URL :  (M1_router_outlet_1:AppModule_compo0_in_M1_router_outlet1)
    path: 'AppModule_compo0_in_M1_router_outlet1',
    component: Compo0Component,  // Sera donc chargé dans le <router-outlet> de name M1_router_outlet_1 (du M1Module).
    outlet: 'M1_router_outlet_1'
  },
  { // Syntaxe URL :  (M2_router_outlet_1:AppModule_compo0_in_M2_router_outlet1)
    path: 'AppModule_compo0_in_M2_router_outlet1',
    component: Compo0Component,  // Sera donc chargé dans le <router-outlet> de name M2_router_outlet_1 (du M2Module).
    outlet: 'M2_router_outlet_1'
  },

  // ============ Composant : AppModule - Compo1 ============

  { // Syntaxe URL : AppModule_compo1
    path: 'AppModule_compo1',
    component: Compo1Component  // Sera donc chargé dans le <router-outlet> sans name (de AppModule).
  },

  { // Syntaxe URL : (AppModule_router_outlet_2:AppModule_compo1_in_AppModule_router_outlet_2)
    path: 'AppModule_compo1_in_AppModule_router_outlet_2',
    component: Compo1Component,  // Sera donc chargé dans le <router-outlet> de name AppModule_router_outlet_2 (de AppModule).
    outlet: 'AppModule_router_outlet_2'
  },
  { // Syntaxe URL :  (M1_router_outlet_1:AppModule_compo1_in_M1_router_outlet1)
    path: 'AppModule_compo1_in_M1_router_outlet1',
    component: Compo1Component,  // Sera donc chargé dans le <router-outlet> de name M1_router_outlet_1 (du M1Module).
    outlet: 'M1_router_outlet_1'
  },
  { // Syntaxe URL :  (M2_router_outlet_1:AppModule_compo1_in_M2_router_outlet1)
    path: 'AppModule_compo1_in_M2_router_outlet1',
    component: Compo1Component,  // Sera donc chargé dans le <router-outlet> de name M2_router_outlet_1 (du M2Module).
    outlet: 'M2_router_outlet_1'
  },



  // ========================================================================
  // ===================== M1Module Components ==============================
  // chargeables dans les router-outlet de AppModule.
  // ========================================================================

  // ============ Composant : M1Module - Compo0 ============

  { // Syntaxe URL : M1Module_compo0
    path: 'M1Module_compo0',
    component: M1.Compo0Component  // Sera donc chargé dans le <router-outlet> sans name (de AppModule).
  },

  { // Syntaxe URL : (AppModule_router_outlet_2:M1Module_compo0_in_AppModule_router_outlet_2)
    path: 'M1Module_compo0_in_AppModule_router_outlet_2',
    component: M1.Compo0Component,  // Sera donc chargé dans le <router-outlet> de name AppModule_router_outlet_2 (de AppModule).
    outlet: 'AppModule_router_outlet_2'
  },

  // ============ Composant : M1Module - Compo1 ============

  { // Syntaxe URL : M1Module_compo1
    path: 'M1Module_compo1',
    component: M1.Compo1Component  // Sera donc chargé dans le <router-outlet> sans name (de AppModule).
  },

  { // Syntaxe URL : (AppModule_router_outlet_2:M1Module_compo1_in_AppModule_router_outlet_2)
    path: 'M1Module_compo1_in_AppModule_router_outlet_2',
    component: M1.Compo1Component,  // Sera donc chargé dans le <router-outlet> de name AppModule_router_outlet_2 (de AppModule).
    outlet: 'AppModule_router_outlet_2'
  },



  // ========================================================================
  // ===================== M2Module_Module Components =======================
  // chargeables dans les router-outlet de AppModule.
  // ========================================================================

  // ============ Composant : M2Module - Compo0 ============

  { // Syntaxe URL : M2Module_compo0
    path: 'M2Module_compo0',
    component: M2.M2Compo0Component  // Sera donc chargé dans le <router-outlet> sans name (de AppModule).
  },

  { // Syntaxe URL : (AppModule_router_outlet_2:M2Module_compo0_in_AppModule_router_outlet_2)
    path: 'M2Module_compo0_in_AppModule_router_outlet_2',
    component: M2.M2Compo0Component,  // Sera donc chargé dans le <router-outlet> de name AppModule_router_outlet_2 (de AppModule).
    outlet: 'AppModule_router_outlet_2'
  },


  // ============ Composant : M2Module - Compo1 ============

  { // Syntaxe URL : M2Module_compo1
    path: 'M2Module_compo1',
    component: M2.M2Compo1Component  // Sera donc chargé dans le <router-outlet> sans name (de AppModule).
  },

  { // Syntaxe URL : (AppModule_router_outlet_2:M2Module_compo1_in_AppModule_router_outlet_2)
    path: 'M2Module_compo1_in_AppModule_router_outlet_2',
    component: M2.M2Compo1Component,  // Sera donc chargé dans le <router-outlet> de name AppModule_router_outlet_2 (de AppModule).
    outlet: 'AppModule_router_outlet_2'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
