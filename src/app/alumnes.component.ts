/*
 * NOTES
 * ORIGEN
 * Desenvolupament Aplicacions Web. Jesuïtes El Clot
 * Component que permet gestionar alumnes
 * @author sergi.grau@fje.edu
 * @date 7.11.24
 * @version 1.0
 */
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Alumne } from './alumne';

@Component({
    selector: 'aplicacio',
    standalone: true,
    imports: [CommonModule],
    templateUrl: 'alumnes-component.html',
    styles: ['h1 { color: #900 }']
})
export class Alumnes_IteradorComponent {
    llistaAlumnes: Alumne[] 
    constructor() {
        let a1:Alumne = new Alumne('sergi', 8, true);
        let a2:Alumne = new Alumne('carles', 7, false);
        let a3:Alumne = new Alumne('anna', 7, true);
        this.llistaAlumnes = [a1,a2, a3];
    }
    afegirAlumne(nom: string, nota:string, fcts:boolean): void {
        console.log(fcts);
        this.llistaAlumnes.push(new Alumne(nom,parseInt(nota), fcts));
    }
    esborrarAlumne(nom: string) {
        this.llistaAlumnes = this.llistaAlumnes.filter(alumne => alumne.nom !== nom);
    }
}

