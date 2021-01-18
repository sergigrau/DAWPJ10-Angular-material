import { Component, OnInit } from '@angular/core';

import { ALUMNES } from './m14-mockAlumnes';
import { M14_AlumneService } from './m14-alumnes-service';
import { Alumne } from './m12-httpdao.service';

@Component({
    selector: 'aplicacio',
    template: ' <tr *ngFor="let alumne of alumnes;index as i; first as isPrimer"><th> id</th><th>nom</th>   <td> {{alumne.id}}</td>   <td> {{alumne.nom}}</td>  </tr>',
})
export class M14_AlumneComponent implements OnInit {

    alumnes: Alumne[];

    constructor(private alumneService: M14_AlumneService) { }

    ngOnInit() {
        this.obtenirAlumnes();
    }

    obtenirAlumnes(): void {
        this.alumneService.obtenirAlumnes()
            .subscribe(alumnes => this.alumnes = alumnes);
    }
}