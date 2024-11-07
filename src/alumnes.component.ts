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
        let a1:Alumne = new Alumne('sergi', 8);
        let a2:Alumne = new Alumne('carles', 7);
        let a3:Alumne = new Alumne('anna', 7);


        this.llistaAlumnes = [a1,a2, a3];
    }
    afegirAlumne(nom: string, nota:string ): void {
        this.llistaAlumnes.push(new Alumne(nom,parseInt(nota)));
    }
    esborrarAlumne(nom: string) {
       /* if (this.llistaAlumnes.indexOf(alumne) >= 0) {
            this.llistaAlumnes.splice(this.llistaAlumnes.indexOf(alumne), 1);
        }
        */
    }
}
class Alumne {
    nom:string;
    nota:number;

    constructor(n:string, no:number){
        this.nom=n;
        this.nota=no;
    }
}
