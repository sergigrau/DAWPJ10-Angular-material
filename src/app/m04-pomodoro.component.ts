/*
 * Component que mostra com poden utilitzar esdeveniment DOM
 * també mostra com utilitzar una pipe
 * mostra un cronometre pomodoro
 * @author sergi grau, sergi.grau@fje.edu
 * @version 1.0
 * date 15.10.2016
 * format del document UTF-8
 *
 * CHANGELOG
 * 15.10.2016
 * - Component que mostra com poden utilitzar esdeveniment DOM
 * 15.10.2017
 * - Actualització a Angular 5
 * NOTES
 * ORIGEN
 * Desenvolupament Aplicacions Web. Jesuïtes El Clot
 */

import { Component } from '@angular/core';
@Component({
    selector: 'aplicacio',
    template: `
    <div>
      <h1> {{ minuts }}:{{ segons | number: '2.0' }} </h1>
      <p>
        <button (click)="conmutarPausa()"
          class="btn btn-danger">
          {{ etiquetaBoto }}
        </button>
      </p>
    </div>
    `
})
export class M04_PomodoroComponent {
    minuts: number;
    segons: number;
    isPausa: boolean;
    etiquetaBoto: string;

    constructor() {
        this.resetPomodoro();
        setInterval(() => this.tick(), 1000);
    }

    resetPomodoro(): void {
        this.isPausa = true;
        this.minuts = 24;
        this.segons = 59;
        this.etiquetaBoto = 'Inicia';
    }

    private tick(): void {
        if (!this.isPausa) {
            this.etiquetaBoto = 'Pausa';

            if (--this.segons < 0) {
                this.segons = 59;
                if (--this.minuts < 0) {
                    this.resetPomodoro();
                }
            }
        }
    }
    conmutarPausa(): void {
        this.isPausa = !this.isPausa;
        if (this.minuts < 24 || this.segons < 59) {
            this.etiquetaBoto = this.isPausa ? 'Continua' : 'Pausa';
        }
    }
}

