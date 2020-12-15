import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent implements OnInit {


  @Input() lines: string [];
  @Input() name: string ="";

  @Output() ruta: EventEmitter<string>

  constructor() { 

    this.lines = new Array();
    this.ruta = new EventEmitter();

  }

  ngOnInit(): void {

  }

  itemSeleccionado(idx : number){
    this.ruta.emit(this.lines[idx]);
  }

}
