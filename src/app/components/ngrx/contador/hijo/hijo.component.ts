import { Component,  OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducer';
import { DividirAction, MultiplicarAction } from '../contador.actions';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.css']
})
export class HijoComponent implements OnInit {

  contador:number;

  constructor( private store : Store<AppState>) { 
    this.contador = 0;
  }
 
  ngOnInit() {
    this.store.select('contador').subscribe(contador => {
      this.contador = contador
      console.log(contador)
    })
  }

  multiplicar(): void {
    // this.contador *= 2;
    // this.cambioContador.emit(this.contador);
    const accion = new MultiplicarAction(9)
    this.store.dispatch(accion)
  }

  dividir(): void {
    // this.contador /= 2;
    // this.cambioContador.emit(this.contador);
    const accion = new DividirAction(2)
    this.store.dispatch(accion)
  }

  // whenContadorCambio(event:number):void {
  //   this.contador = event;
  //   // this.cambioContador.emit(this.contador);
  // }

}
