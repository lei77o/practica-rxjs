import { Component, OnInit } from '@angular/core';
import { interval, timer, fromEvent, fromEventPattern } from 'rxjs';
import { bufferTime } from 'rxjs/operators';

@Component({
  selector: 'app-interval-timer',
  templateUrl: './interval-timer.component.html',
  styleUrls: ['./interval-timer.component.css']
})
export class IntervalTimerComponent implements OnInit {

  aux : number = 0;
  coordX: number = 0;
  coordY: number = 0;
  bufferValue: number[] = [];
  el: any;

  constructor() { }

  ngOnInit() {

    this.el= document.getElementById('elemento');

    const mouseMove = fromEvent(this.el ,'mousemove');

    mouseMove.subscribe(( e: any) => {

      this.coordX = e.clientX;
      this.coordY = e.clientY;

    });
 
    //Incrementa cada x(t)
    const contador = interval( 1000 );
  
    contador.subscribe( (n) => {
      this.aux = n;
    });

    const timer = interval(500);

    const buffer = timer.pipe( bufferTime(2000, 1000));

    const subs = buffer.subscribe( val =>
      {
        this.bufferValue = val;
      });

  }

}
