/*
 * Mòdul d'encaminament
 * @author sergi grau, sergi.grau@fje.edu
 * @version 1.0
 * date 15.10.2017
 * format del document UTF-8
 *
 * CHANGELOG
 * 15.10.2017
 * - Mòdul d'encaminament
 *
 * NOTES
 * ORIGEN
 * Desenvolupament Aplicacions Web. Jesuïtes El Clot
 */

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { M01_SalutacioComponent } from './m01-salutacio.component';
import { M02_SumaComponent } from './m02-suma.component';

const encaminaments: Routes = [
  { path: '', redirectTo: '/salutacio', pathMatch: 'full' },
  { path: 'salutacio', component: M01_SalutacioComponent },
  { path: 'suma', component: M02_SumaComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(encaminaments)],
  exports: [RouterModule]
})
export class AppEncaminamentModule { }

