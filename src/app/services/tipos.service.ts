import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TiposService {

  constructor() { }

  obtenerTipos(){

    let tipos = new Array<string>();
 
    tipos.push('Filter');
    tipos.push('Interval');
    tipos.push('Observable');
    tipos.push('Map');
    tipos.push('Forkjoin');
    tipos.push('Subject');

    return tipos;
  }

}