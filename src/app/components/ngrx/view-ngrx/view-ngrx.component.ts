import { Component, OnInit } from '@angular/core';
import { state } from '@angular/animations';

import { Store, Action } from '@ngrx/store';
import { IncrementarAction, DecrementarAction } from '../contador/contador.actions';

import { AppState } from '../app.reducer';

@Component({
  selector: 'app-view-ngrx',
  templateUrl: './view-ngrx.component.html',
  styleUrls: ['./view-ngrx.component.css']
})
export class ViewNgrxComponent implements OnInit {
  
  contador: number;

  constructor( private store: Store<AppState>) {

    this.contador=0;
    
    this.store.select('contador').subscribe( state => {

      (contador: number)  => this.contador = contador;

    });

  }

  ngOnInit(): void {
  }

  incrementar(){
    //this.contador+=1;
    const action = new IncrementarAction();
    this.store.dispatch( action );
  }

  decrementar(){      
      const action = new DecrementarAction();
      this.store.dispatch( action );
  }


}
