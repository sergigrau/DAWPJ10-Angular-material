import { Injectable } from '@angular/core';
import { Alumne } from './m14-alumne';
import { ALUMNES } from './m14-mockAlumnes';
import { Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class M14_AlumneService {

  constructor() { }

  obtenirAlumnes(): Observable<Alumne[]> {
    return of(ALUMNES);
  }
}