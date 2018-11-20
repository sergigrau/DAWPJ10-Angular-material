/*
 * Pipe personalitzada que ordena un array
 * @author sergi grau, sergi.grau@fje.edu
 * @version 1.0
 * date 15.10.2016
 * format del document UTF-8
 *
 * CHANGELOG
 * 5.12.2017
 * - Pipe personalitzada que ordena un array
 * NOTES
 * ORIGEN
 * Desenvolupament Aplicacions Web. Jesuïtes El Clot
 */

import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "ordenarPer"
})
export class M09_OrdenarPerPipe implements PipeTransform {
  transform(array: Array<any>, args?) {

    if (array) {
      let ordernarPerValor = args[0]
      let perValor = 1
      if (ordernarPerValor.charAt(0) == "!") {
        perValor = -1
        ordernarPerValor = ordernarPerValor.substring(1)
      }
     
      array.sort((a: any, b: any) => {
        if (a[ordernarPerValor] < b[ordernarPerValor]) {
          return -1 * perValor;
        } else if (a[ordernarPerValor] > b[ordernarPerValor]) {
          return 1 * perValor;
        } else {
          return 0;
        }
      });
      return array;
    }
  }
}