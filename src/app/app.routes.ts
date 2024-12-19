import { Routes } from '@angular/router';
import { M01_SalutacioComponent } from './m01-salutacio.component.ts';
import { M08_PipesComponent } from './m08-pipes.component.js';
import { M02_SumaComponent } from './m02-suma.component.js';


export const routes: Routes = [
  { path: 'm01', component: M01_SalutacioComponent },
  { path: 'm02', component: M02_SumaComponent },
  { path: 'pipes', component: M08_PipesComponent },

  { path: '', redirectTo: '/m01', pathMatch: 'full' }  
];