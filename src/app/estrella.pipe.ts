import {Pipe, PipeTransform} from '@angular/core';
@Pipe({
  name: 'estrella',
  standalone: true,

})
export class EstrellaPipe implements PipeTransform {
  transform(valor: string): string {
    return `🂡 ${valor} 🂡`;
  }
}