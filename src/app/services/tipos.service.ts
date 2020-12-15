import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TiposService {

  constructor( public http: HttpClient) { }

  obtenerTipos(){

    let tipos = new Array<string>();
 
    tipos.push('Filter');
    tipos.push('Interval');
    tipos.push('Observable');
    tipos.push('Map');
    tipos.push('Forkjoin');
    tipos.push('Subject');

    tipos.sort();

    return tipos;
  }

  getTypes(){
    return this.http.get('http://www.google.com');
  }

}