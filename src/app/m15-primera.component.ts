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
 * 16.02.2022
 * - Actualització a Angular 13, pas de dades
 * NOTES
 * ORIGEN
 * Desenvolupament Aplicacions Web. Jesuïtes El Clot
 */
import { Component } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
    selector: 'aplicacio',
    template: `

    <div class="form-group">
    <input type="text" class="form-control"  placeholder="Entra dada"  #dada required>
    </div>

      <button  class="btn btn-primary" (click)="anarTaula(dada.value)"> anar a la segona </button>
    `,
    styles: ['h2 { color: #900 }']
})
export class M15_PrimeraComponent {
    
    resultado: string;
    
    anarTaula(dada:string): void {
        this.resultado=dada;
        this.router.navigate(['/segona'], {state: {data: {dada:this.resultado}}});
    }

    constructor(private route:ActivatedRoute,private router:Router){
        this.resultado = '';
    }
  


}

