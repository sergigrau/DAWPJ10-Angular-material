/*
 * Component que permet sumar dos nombres
 * mostra con es generen esdeveniments i es controlen propietats
 * utilitza ngif
 * @author sergi grau, sergi.grau@fje.edu
 * @version 1.0
 * date 15.10.2017
 * format del document UTF-8
 *
 * CHANGELOG
 * 15.10.2017
 * - Component que permet sumar dos nombres
 *
 * NOTES
 * ORIGEN
 * Desenvolupament Aplicacions Web. Jesuïtes El Clot
 */
import { Component } from '@angular/core';

@Component({
    selector: 'aplicacio',
    template: `

    <div class="form-group">
    <input type="text" class="form-control"  placeholder="Entra nombre 1"  #n1 required>
    </div>

    <div class="form-group">
    <input type="text" class="form-control"  placeholder="Entra nombre 2"  [(ngModel)]="n2" required>
    </div>
    <button  class="btn btn-primary" (click)="sumar(n1.value)"> suma </button>
    <button  class="btn btn-primary" (click)="restar(n1.value)"> resta </button>
    
    <div class="alert alert-primary" role="alert">
      <h3>el resultat és {{resultat}} </h3>
    </div>
      <h2 *ngIf="resultat<0">el valor es negatiu</h2>
  
    `,
    styles: ['h2 { color: #900 }']
})
export class M02_SumaComponent {
    
    private resultat: number;
    //private n1: number;
    private n2: number;
    constructor() {
        this.resultat = 0;
    }
    sumar(n:number): void {
        this.resultat = n * 1 + this.n2 * 1;
    }
    restar(n:number): void {
        this.resultat = n * 1 - this.n2 * 1;
    }

}
