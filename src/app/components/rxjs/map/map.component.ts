import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { fromEvent, interval, merge, empty, of } from "rxjs";
import { map , switchMap, mapTo, startWith,scan, takeWhile, concatMap, delay, mergeMap} from 'rxjs/operators';
import { ajax } from 'rxjs/ajax';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  @ViewChild('pause')
  pauseButton!: ElementRef<any>;

  @ViewChild('resume')
  resumeButton!: ElementRef;

  @ViewChild('remaining')
  remainingLabel!: ElementRef;

  concat: string = "";
  
  constructor() { }


  ngOnInit() {
    
    const remainingLabel = document.getElementById('remaining');
    const pauseButton = document.getElementById('pause');
    const resumeButton = document.getElementById('resume');

    const obsInterval = interval(1000).pipe(mapTo(-1));
    
    const pause = fromEvent(document, 'click').pipe(mapTo(false));

    const resume = fromEvent(document, 'click').pipe(mapTo(true));


    const timer = merge(pause, resume).pipe(
        startWith(true),
        switchMap(val => (val ? obsInterval: empty())),
        scan((acc, curr) => (curr ? curr + acc: acc), 10),
        takeWhile( v=> v >= 0)
    ).subscribe((val: any) => (this.remainingLabel = val));

    //ConcatMap
    const source = of(2000,1000,3000);

    const obsConcatMap = source.pipe(
      concatMap( v => of(v.toString()).pipe( delay(v)))
    );

    obsConcatMap.subscribe(
      v => {this.concat = v;}
    );
    
    fromEvent(document, 'click').pipe( switchMap(() => interval(1000))).subscribe(console.log);

    //MergeMap
    const src = of( ajax.getJSON('https://api.github.com/users/lei77o'),
                    ajax.getJSON('https://api.github.com/users/google'));   

    const obsMergeMap = src.pipe(mergeMap(v => v));
    
    obsMergeMap.subscribe( v=> {
      console.log(v);
    })

  }

}
