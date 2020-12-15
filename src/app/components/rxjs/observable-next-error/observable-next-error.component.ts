import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-observable-next-error',
  templateUrl: './observable-next-error.component.html',
  styleUrls: ['./observable-next-error.component.css']
})
export class ObservableNextErrorComponent implements OnInit, OnDestroy {

  mensaje: string[] = [];

  constructor() { }

  ngOnInit() {

  
    const myObservable = new Observable ( function(observer) {

      observer.next(1);
      observer.next(2);
      observer.next(3);
      observer.complete();

    });

    const subs = myObservable.subscribe({
      next: x => { this.mensaje.push('' + x)},
      error: err => { this.mensaje.push(err)},
      complete: () => {this.mensaje.push('Suscripcion completa')}
    });
    subs.unsubscribe();

  }

  ngOnDestroy(){

  }

}
