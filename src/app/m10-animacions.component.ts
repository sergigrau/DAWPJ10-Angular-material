/*
 * Component que fa ús d'animacions personalitzades
 * @author sergi grau, sergi.grau@fje.edu
 * @version 1.0
 * date 15.10.2016
 * format del document UTF-8
 *
 * CHANGELOG
 * 5.12.2017
 * - Component que fa ús d'animacions personalitzades
  * 1.12.2020
 * - Actualització a Angular 11
 * NOTES
 * ORIGEN
 * Desenvolupament Aplicacions Web. Jesuïtes El Clot
 */

import { Component } from '@angular/core';
import { NgModule } from '@angular/core';
@Component({
  selector: 'aplicacio',
  template: `
    <h2>Animacions </h2>
        
    <animacio [isVisible]="mostrarEfecte">
      DAW2
    </animacio>
    
    <button (click)="mostrarEfecte = !mostrarEfecte">mostrar efecte</button>

  `,
  styles: [`    
      animacio div {
        padding : 25px;
        background-color: #fdda8d;
      }
      
      animacio {
        background-color: #8a2be2;
        width: 100%;
        display: block;
        overflow: hidden;        
      }    
`
  ]
})
export class M10_AnimacionsComponent {
  mostrarEfecte: boolean = true;
}
