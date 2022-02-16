/*
 * Component que te la lògica del component compte enrera,
 * mostra con es generen esdeveniments i es controlen propietats
 * @author sergi grau, sergi.grau@fje.edu
 * @version 1.0
 * date 15.10.2016
 * format del document UTF-8
 *
 * CHANGELOG
 * 15.10.2016
 * - Component que te la lògica del component compte enrera,
 * 15.10.2017
 * - Actualització a Angular 5
 * 16.02.2022
 * - Actualització a Angular 13, pas de dades
 * NOTES
 * ORIGEN
 * Desenvolupament Aplicacions Web. Jesuïtes El Clot
 */
import { Component } from '@angular/core';

@Component({
    selector: 'aplicacio',
    template: `
    <h4> dades pasades {{rebut}}</h4>
    `,
    styles: ['h4 { color: #0F0 }']
})
export class M15_SegonaComponent {

    rebut: string;

    constructor() {
       console.log(history.state.data);
       this.rebut = history.state.data.dada;
    }

}
