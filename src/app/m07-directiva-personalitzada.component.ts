/*
 * Component que demostra que aplica una directiva marcar que
 * defineix el color de fons a groc
 * @author sergi grau, sergi.grau@fje.edu
 * @version 1.0
 * date 15.10.2016
 * format del document UTF-8
 *
 * CHANGELOG
 * 5.12.2017
 * - Component que demostra que aplica una directiva marcar 
 * 1.12.2020
 * - Actualització a Angular 11
 * NOTES
 * ORIGEN
 * Desenvolupament Aplicacions Web. Jesuïtes El Clot
 */

import { Component } from '@angular/core';
@Component({
  selector: 'aplicacio',
  template: `<h1>Directiva personalitzada</h1>
<p marcat>Text marcat!</p>`
})
export class M07_DirectivaPersonalitzadaComponent {
  color: string;
}
