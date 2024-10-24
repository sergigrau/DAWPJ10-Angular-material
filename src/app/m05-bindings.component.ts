
import { Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
    selector: 'rellotge',
    template: `
    <div>
      <h1> queden {{segons}} </h1>
    </div>
    `,
    styles: ['h1 { color: #900 }'],
    standalone: true,
    imports: [CommonModule],
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

@Component({
    selector: 'aplicacio',
    templateUrl: './m05-bindings-pomodoro.html',
    standalone: true,
    imports: [CommonModule, M05_CompteEnrera_Component],
})

export class M05_BindingsComponent {
    onCompteEnreraFinalitza(): void {
        alert('Final!');
    }
}


