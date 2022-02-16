/*
 * Component que definex el marc per a fer uns encaminaments a altres components
 * @author sergi grau, sergi.grau@fje.edu
 * @version 1.0
 * date 15.10.2017
 * format del document UTF-8
 *
 * CHANGELOG
 * 15.10.2017
 * - Component que definex el marc per a fer uns encaminaments a altres components
  * 16.02.2022
 * - Actualització a Angular 12 pas de parámetres
 * NOTES
 * ORIGEN
 * Desenvolupament Aplicacions Web. Jesuïtes El Clot
 */
import { Component } from '@angular/core';
import { NgModule } from '@angular/core';
@Component({
  selector: 'aplicacio',
  template: `
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand" href="#">{{titol}}</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <a class="nav-item nav-link active" routerLink="/salutacio" routerLinkActive="active">intro </a>
        <a class="nav-item nav-link" routerLink="/primera" routerLinkActive="active">primera</a>
        <a class="nav-item nav-link" routerLink="/segona" routerLinkActive="active">segona</a>
       
      </div>
    </div>
  </nav>
    <router-outlet></router-outlet>
    peu de pàgina
  `
})
export class M13_EncaminamentPasComponent {
  titol = 'DAW2 demo de routing amb pas de dades';
}