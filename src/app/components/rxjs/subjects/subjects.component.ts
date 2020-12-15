import { Component, OnInit } from '@angular/core';
import { Subject, from, ConnectableObservable, interval, BehaviorSubject, fromEvent, merge } from 'rxjs';
import { tap, multicast, map } from 'rxjs/operators';

@Component({
  selector: 'app-subjects',
  templateUrl: './subjects.component.html',
  styleUrls: ['./subjects.component.css']
})
export class SubjectsComponent implements OnInit {

  constructor() { }

  osbA: number[] = [];
  osbB: number[] = [];
  coordX: number = 0;
  coordY: number = 0;
  time: number = 0;

  ngOnInit(): void {
  
    // Subject
    const subject= new Subject<number>();

    subject.subscribe({
      next:(n) => {this.osbA.push(n);}
    });

    subject.subscribe({
      next:(n) => {this.osbB.push(n + 1);}
    });

    subject.next(1);
    subject.next(2);
    
    //Multicast
    const src = from([1, 2, 3, 4]);

    const multi = src.pipe(multicast(() => 
      new Subject()
    )) as ConnectableObservable<any>;

    multi.subscribe({
      next:(v) => console.log(`Observer A: ${v}`)
    });

    multi.subscribe({
      next:(v) => console.log(`Observer B: ${v}`)
    });

    multi.connect();

    //Ejemplo simulando una conexion a otra api
    const src2 = interval(3000).pipe(
      tap((n) => console.log('id: ' + n))
    );
    
    const multi2 = src2.pipe( multicast(() => new Subject()
    )) as ConnectableObservable<any>;

    multi2.subscribe(v => console.log('http://localhost:4200/' + v));
    multi2.subscribe(v => console.log('http://localhost:4200/' + (v - 1)));

    multi2.connect();

    // BehaviorSubject
    // Si o si requiere un valor de inicialización 
    // A diferencia de los subjects siempre trae el ultimo valor, es decir el valor actual de la subscripcion.
    const bsubject = new BehaviorSubject(0);

    const click$ = fromEvent(document, 'click').pipe(
      map((e : any) => {
        this.coordX = e.clientX;
        this.coordY = e.clientY;
      })
    );

    const interval$ = interval(1000).pipe(
      tap( n => {subject.next(n)
      this.time = n;
      })
    );
    
    merge(click$, interval$).subscribe(console.log);
    
  } 

}
