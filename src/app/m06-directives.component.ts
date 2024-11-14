/*
 * Component que demostra el funcionament de diverses directives
 * Fa ús d'una classe interna
 * @author sergi grau, sergi.grau@fje.edu
 * @version 1.0
 * date 15.10.2016
 * format del document UTF-8
 *
 * CHANGELOG
 * 15.10.2016
 * - Component embolcall que utilitza un subcomponent amb la lògica
 * 5.12.2017
 * - correccions i actualitzacions
   * 1.12.2020
 * - Actualització a Angular 11
 * NOTES
 * ORIGEN
 * Desenvolupament Aplicacions Web. Jesuïtes El Clot
 */

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

export class Alumne {
  id: number=0;
  nom: string='';
}

@Component({
  selector: 'aplicacio',
  standalone: true,
  imports: [CommonModule],
  template: `
      <p>expressió: {{estatVisible}}</p>
      <button class="btn btn-primary" (click)="dada=2">dada 2</button>
      <button class="btn btn-primary" (click)="dada=3">dada 3</button>
      <button class="btn btn-primary" (click)="veureInfo()">Mostrar info</button>
        <div *ngIf="estatVisible">
          <h2 [ngStyle]="{'color': color}">Angular2!</h2>
        </div>

        <ul class="list-group" >
        <li [ngClass]="'blau'" *ngFor="let alumne of alumnes; let i = index">
        Alumne #{{i}} {{alumne.nom}}
        </li>
        
      </ul>
        <div [ngSwitch]="dada">
          <h2 *ngSwitchCase="2">has seleccionat 2</h2>
          <ng-container *ngSwitchCase="3">
            <h2>has seleccionat 3</h2>
          </ng-container>
          <p *ngSwitchDefault>No has seleccionat res</p>
      </div>
  `,
  styles: ['.blau { color: #00F }']
})
export class M06_DirectivesComponent {
  color: string = 'rgb(150,0,0)';
  dada: number = 4;
  alumnes = [
    { id: 11, nom: 'Sergi' },
    { id: 12, nom: 'Joan' },
    { id: 13, nom: 'Anna' },

  ];
  estatVisible: boolean = false;
  veureInfo(): void {
    this.estatVisible = !this.estatVisible;
  }
}
