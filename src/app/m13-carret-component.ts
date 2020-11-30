/*
 * Component Llista de productes 
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
import { Component, Input, OnInit} from '@angular/core';
import { Producte } from './m13-compra-producte-component';
@Component({
  selector: 'aplicacio',
  template: `
  
  <producte *ngFor='let p of items' [producte]="p"></producte>

  <div class="alert alert-primary" role="alert">
  import total {{import | currency:'EUR'}}
  </div>
  `
})
export class M13_Carret {
  public static llistaCompra: Producte[] = new Array();
  public import:number;

  get items() {
    let suma:number=0;
    M13_Carret.llistaCompra.forEach(element => {
      suma+=element.preu;
    });
    this.import=suma;
    return M13_Carret.llistaCompra;
  }

  constructor() {
  }
  afegirProducte(p:Producte){
    console.log(p);
    M13_Carret.llistaCompra.push(p);
   
  }
  
}