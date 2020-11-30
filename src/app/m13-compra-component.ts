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
import { Component, Input} from '@angular/core';
import {Producte} from './m13-compra-producte-component';
@Component({
  selector : 'aplicacio',
  template: `
  
  <producte *ngFor='let producte of llistaProductes' ></producte>
  `
})
export class M13_Compra {

    public llistaProductes: Producte[] = new Array();
    constructor() {
        this.llistaProductes.push(new Producte('1','Angular 11', 'El millor llibre sobre Angular', 20));
        this.llistaProductes.push(new Producte('2','Python 3.9', 'Imprescrindible per aprendre Python', 12));
        this.llistaProductes.push(new Producte('3','Java 15', 'Manual imprescindible sobre Java', 40));
        this.llistaProductes.push(new Producte('4','NodeJS', 'Tots els secrets de Node.js', 42));   
    }
    
}