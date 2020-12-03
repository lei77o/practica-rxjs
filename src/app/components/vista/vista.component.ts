import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { TiposService } from '../../services/tipos.service';

@Component({
  selector: 'app-vista',
  templateUrl: './vista.component.html',
  styleUrls: ['./vista.component.css']
})
export class VistaComponent implements OnInit {

  tipos: string[] = [];
  componentSel: string;
  elemenSelected: string;

  constructor( 
    private tipoService : TiposService,
    private router: Router ){

    this.tipos= [];
    this.componentSel = "";
    this.elemenSelected = "";

  }

  ngOnInit(): void  {

    this.tipos = this.tipoService.obtenerTipos();
    
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

      default:
        break;
    }

  }

}
