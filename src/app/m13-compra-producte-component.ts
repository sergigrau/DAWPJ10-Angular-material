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
import { Component, Input } from '@angular/core';

@Component({
    selector: 'producte',
    template: `
  <div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">{{producte.nom}}</h5>
    <h6 class="card-subtitle mb-2 text-muted">{{producte.preu}}</h6>
    <p class="card-text">{{producte.descripcio}}</p>
    <a href="#" class="card-link">Comprar</a>
  </div>
</div>
  `
})
export class M13_CompraProducte {
     @Input() producte: Producte;
    constructor() {

    }
}

export class Producte {
    private id: string;
    private nom: string;
    private descripcio: string;
    private preu: number;

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