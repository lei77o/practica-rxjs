import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { TiposService } from '../../services/tipos.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {

  nameRxjs: string = "Rxjs";
  testing: string = "Testing";
  ngRx: string = "Ngrx";
  

  rxjsOptions: string[] = [];
  ngrxOptions: string[] = [];
  testingOptions: string[] = [];
  
  types: any;
  componentSel: string;
  elemenSelected: string;

/**
 * En el constructor se instancian el servicio para obtener los tipos de datos y el Router provisto por {@link https://angular.io|Angular}
 * @param tipoService Instancia del servicio TipoService que obtiene los tipos de elementos
 * @param router Instancia Router de Angular 
 */

  constructor( 
    private tipoService : TiposService,
    private router: Router ){

    this.rxjsOptions= [];
    this.componentSel = "";
    this.elemenSelected = "";
    this.testingOptions.push("Incrementador")

  }

  ngOnInit(): void  {

    this.rxjsOptions = this.tipoService.obtenerTipos();
    
   }

  /**
 * Metodo para capturar el tipo seleccionado y obtener el nombre
 * {@link http://www.google.com definicion de event}
 * @example 
 * Capturar el evento
 * 
 * @param event event click en el DOM 
 */

  captureSelected(event: string){
    this.elemenSelected = event.toString();
    this.navigateComponent(this.elemenSelected); 
  }

  /**
   * Realiza el {@link https://angular.io/guide/router navigate}  hacia los otros componentes
   * @param element nombre del tipo seleccionado
   */

  navigateComponent(element : string){

    switch (element) {
      case 'Subject':
        this.router.navigate(['/subject']);
        break;

      case 'Forkjoin':
        this.router.navigate(['/forkjoin']);
        break;

      case 'Map':
        this.router.navigate(['/maps']);
        break;

      case 'Observable':
        this.router.navigate(['/observable']);
        break;

      case 'Interval':
        this.router.navigate(['/interval']);
        break;
        
      case 'Filter':
        this.router.navigate(['/filter']);
        break;
      case 'Incrementador':
        this.router.navigate(['/incrementador']);
        break;

      case 'Testing':
        this.router.navigate(['/testing']);
        break;

      default:
        break;
    }

  }

   /**
   * Este metodo esta definido para la practica de testing
   */
  getType(){
    this.tipoService.getTypes().subscribe(
      (tips : any) => this.types = tips
    );
  }

}
