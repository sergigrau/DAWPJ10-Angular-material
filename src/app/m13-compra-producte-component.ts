/*
 * Component Producte 
 * @author sergi grau, sergi.grau@fje.edu
 * @version 1.0
 * date 30.11.2020
 * format del document UTF-8
 *
 * CHANGELOG
 * 30.11.2020
 * - Component producte
 * NOTES
 * ORIGEN
 * Desenvolupament Aplicacions Web. Jesuïtes El Clot
 */
import { Component, Input, OnInit } from '@angular/core';
import { M13_Carret } from './m13-carret-component';

@Component({
    selector: 'producte',
    template: `
  <div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">{{producte.nom}}</h5>
    <h6 class="card-subtitle mb-2 text-muted">{{producte.preu | currency:'EUR'}}</h6>
    <p class="card-text">{{producte.descripcio}}</p>
    <button type="button" class="btn btn-primary" (click)="afegirProducte()" >Comprar</button>
  </div>
</div>
  `
})
export class M13_CompraProducte  {
     @Input() producte: Producte;
     private carret = new M13_Carret();

    constructor() {
    }
    afegirProducte() {
      this.carret.afegirProducte(this.producte);
    }
}



export class Producte {
    public id: string;
    public nom: string;
    public descripcio: string;
    public preu: number;

    constructor(id: string,
        nom: string,
        descripcio: string,
        preu: number) {
        this.id = id;
        this.nom = nom;
        this.descripcio = descripcio;
        this.preu = preu;
    }
}