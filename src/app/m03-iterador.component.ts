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
 * 1.12.2020
 * - Actualització a Angular 11
 * NOTES
 * ORIGEN
 * Desenvolupament Aplicacions Web. Jesuïtes El Clot
 */
import { Component } from '@angular/core';

@Component({
    selector: 'aplicacio',
    templateUrl: 'm03-iterador-component.html',
    styles: ['h1 { color: #900 }']
})
export class M03_IteradorComponent {
    llistaAlumnes: string[] = ['Joan', 'Sergi', 'Anna'];
    constructor() {
    }
    afegirAlumne(alumne: string): void {
        this.llistaAlumnes.push(alumne);
    }
    esborrarAlumne(alumne: string) {
        if (this.llistaAlumnes.indexOf(alumne) >= 0) {
            this.llistaAlumnes.splice(this.llistaAlumnes.indexOf(alumne), 1);
        }
    }
}
