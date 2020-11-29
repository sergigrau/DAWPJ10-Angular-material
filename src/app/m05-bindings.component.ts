/*
 * Component embolcall que utilitza un subcomponent amb la lògica
 * @author sergi grau, sergi.grau@fje.edu
 * @version 1.0
 * date 15.10.2016
 * format del document UTF-8
 * date 10.12.2017
 * actualització i ajustament a un sol fitxer
 * CHANGELOG
 * 15.10.2016
 * - Component embolcall que utilitza un subcomponent amb la lògica
 * 6.12.2017
 * - correcció de bugs i creació d'un fitxer amb 2 components
 * 1.12.2020
 * - Actualització a Angular 11
 * NOTES
 * ORIGEN
 * Desenvolupament Aplicacions Web. Jesuïtes El Clot
 */
import { Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'aplicacio',
    templateUrl: './m05-bindings-pomodoro.html'
})

export class M05_BindingsComponent {
    onCompteEnreraFinalitza(): void {
        alert('Final!');
    }
}

@Component({
    selector: 'comptador',
    template: `
    <div>
      <h1> {{segons}} </h1>
    </div>
    `,
    styles: ['h1 { color: #900 }'],
    encapsulation: ViewEncapsulation.Emulated
})
export class M05_CompteEnrera_Component {
    private intervalId;
    @Input() segons: number = 60; //si no es defineix la prop d'entrada val 60
    @Output() completat: EventEmitter<any> = new EventEmitter();
    @Output() progres: EventEmitter<number> = new EventEmitter<number>();

    constructor() {
        this.intervalId = setInterval(() => this.tick(), 1000);        
    }
    private tick(): void {
        if (--this.segons < 1) {
            clearInterval(this.intervalId);
            this.completat.emit(null);
        }
        this.progres.emit(this.segons);
    }
}

