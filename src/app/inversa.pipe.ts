import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'inversa',
  standalone: true,

})

export class InversaPipe implements PipeTransform {
  transform(valor: string): string {
      let inversa = valor.split('').reverse().join('');
      return inversa;
  }
}