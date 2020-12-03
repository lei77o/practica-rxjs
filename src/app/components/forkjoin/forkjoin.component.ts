import { Component, OnInit } from '@angular/core';
import { forkJoin , of , pipe , interval } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { delay , take } from 'rxjs/operators';

@Component({
  selector: 'app-forkjoin',
  templateUrl: './forkjoin.component.html',
  styleUrls: ['./forkjoin.component.css']
})
export class ForkjoinComponent implements OnInit {

  api: any;
  valor: any[] = [];
  urlImg: string = "";

  constructor() { 

    this.urlImg = "../../../assets/img/forkJoin.png";

  }

  ngOnInit(): void {
    const fork = forkJoin(
      of('Hola '),
      of('Mundo ').pipe(delay(500)),
      interval(1000).pipe(take(2))
    );

    fork.subscribe(val => {
      this.valor = val
    });

    const src = forkJoin({
      google: ajax.getJSON('https://api.github.com/users/google'),
      microsoft: ajax.getJSON('https://api.github.com/users/microsoft'),
      ctmil: ajax.getJSON('https://api.github.com/users/ctmil'),
    })
    src.subscribe( val => {
      console.log(val);
    });
  }

}
