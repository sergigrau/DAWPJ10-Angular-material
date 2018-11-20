/*
 * Component que mostra com fer peticions a un backend
 * @author sergi grau, sergi.grau@fje.edu
 * @version 1.0
 * date 20.12.2017
 * format del document UTF-8
 *
 * CHANGELOG
 * 20.12.2017
 * - Component que mostra com fer peticions a un backend
 * NOTES
 * ORIGEN
 * Desenvolupament Aplicacions Web. Jesuïtes El Clot
 */
import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs/Observable";
import { HttpClient } from "@angular/common/http";
import { HttpParams } from '@angular/common/http';


interface Alumne {
    nom: string;
    cognom: string;
    curs: string;
}

@Component({
    selector: 'aplicacio',
    template: `

    <img src="../assets/logo.png" >
      <ul *ngIf="alumnes$ | async as alumnes else senseDades">
          <li *ngFor="let alumne of alumnes">
              {{alumne.nom}}
          </li> 
      </ul>
      <ng-template #senseDades>No hi ha dades disponibles</ng-template>
      <a href="http://localhost:8888/afegirAlumne"> afegir alumne foo </a>
<br/>
      <audio src="http://localhost:8888/audio1.mp3" autoplay controls></audio>
  `})
export class M12_Http implements OnInit {
    private alumnes$: Observable<Alumne[]>;

    constructor(private http: HttpClient) {
    }

    ngOnInit() {
       this.alumnes$=this.consultarTots();
    }
    
    consultarTots():Observable<Alumne[]> {
        return this.http.get<Alumne[]>('http://localhost:8888/consultarTots');
    }
    consultarAlumne(): void {
        const params = new HttpParams().set('alumne', 'sergi');
        this.http.get('http://localhost:8888/consultarAlumne', { params }).subscribe(data => {
            console.log(data);
        });
    }
    afegirAlumne(): void {
        this.http.post<Alumne>('http://localhost:8888/afegirAlumne', {
            nom: 'foo',
            cognom: 'bar'
        }).subscribe(data => {
            console.log(data.nom, data.cognom);
        });
    }
}