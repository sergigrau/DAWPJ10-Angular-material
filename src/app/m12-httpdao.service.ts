import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import {Observable} from 'rxjs/Observable';

import { HttpClient } from '@angular/common/http';

@Injectable()
export class M12_HttpDAOService {

  private httpDAO: HttpClient;

  constructor(private http: HttpClient) {
    this.httpDAO = http;
  }

  private handleError(error: any): Promise<any> {
    console.error('Error produït', error);
    return Promise.reject(error.message || error);
  };

  consultarAlumnes() {
    const href = 'api/consultarAlumnes';
    const requestUrl = `${href}`;
    var alumnes: Alumne[] = []

   /*
    this.http.get(requestUrl)
      //.map(response => response.json() as Alumne[]).subscribe((res => {
        res.forEach(element => {
          alumnes.push(element);
        });
      }));
    return alumnes;
    */
  }


  esborrarAlumne(alumne: Alumne) {
    //this.http.get(`api/esborrarAlumne?idr=${alumne.id}`)
    //.subscribe(response => response.json() as Alumne)  
  }
}

export interface Alumne {
    id:number;
    nom:string;
}