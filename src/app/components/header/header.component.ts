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

  showComponent(event: string){
    this.elemenSelected = event.toString();
    this.seleccion(this.elemenSelected); 
  }

  seleccion(elemento : string){

    switch (elemento) {
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

  //Metodos para testing de integracin
  getType(){
    this.tipoService.getTypes().subscribe(
      (tips : any) => this.types = tips
    );
  }

}
