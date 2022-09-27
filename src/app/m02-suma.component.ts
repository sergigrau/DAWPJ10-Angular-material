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
 * 1.12.2020
 * - Actualització a Angular 11
 * NOTES
 * ORIGEN
 * Desenvolupament Aplicacions Web. Jesuïtes El Clot
 */
import { Component } from '@angular/core';

@Component({
    selector: 'aplicacio',
    template: `

    <div>
    <input type="text" placeholder="Entra nombre 1"  #n1 required>
    </div>

    <div >
    <input type="text"  placeholder="Entra nombre 2"  #n2 required>
    </div>
    <button (click)="sumar(n1.value, n2.value)"> suma </button> 
    <div role="alert">
      <h3>el resultat és {{resultat}} </h3>
    </div>
     
  
    `,
    styles: ['h2 { color: #900 }']
})
export class M02_SumaComponent {
    
    resultat: number;
    
    constructor() {
        this.resultat = 0;
    }
    sumar(n1:string, n2:string): void {
        this.resultat = parseInt(n1)+parseInt(n2) ;
    }


}
