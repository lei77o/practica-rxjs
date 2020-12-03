import { Component, OnInit } from '@angular/core';

import { pipe, of, fromEvent } from 'rxjs';
import { map, filter, tap } from 'rxjs/operators';


@Component({
  selector: 'app-map-filter',
  templateUrl: './map-filter.component.html',
  styleUrls: ['./map-filter.component.css']
})
export class MapFilterComponent implements OnInit {

  numeros: number[] = [];
  lista: number[] = [];
  estado: string = "";
  tipo: string = "";

  constructor() { }

  ngOnInit() {
    
    const clicks = fromEvent(document, 'click');

    const positions = clicks.pipe(
      tap(ev => { 
        this.estado = "Procesado";
        this.tipo = ev.type.toUpperCase();
      },
      err => { 
        console.log(err)
        this.estado = "Error ver consola";
      },
      () =>  {
        this.estado = "Completado";
      })
    );

    positions.subscribe(pos => console.log(pos));

    const nums = of(1, 2, 3, 4, 5);

    const alCuadrado = pipe(
      filter((n: number) => n % 2 === 0),
      map(n => n * n)
    );

    const cuadrado = alCuadrado( nums );

    cuadrado.subscribe(x =>{
      
      this.numeros.push(x);

    });
  }

}
