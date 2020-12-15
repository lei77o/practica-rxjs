import { Component, OnInit } from '@angular/core';
import { IUser } from '../../interfaces/IUser';
import { Store, select} from '@ngrx/store';
import * as Auth from '../Actions/auth.actions';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user!: IUser;
  //error$ = this.store.select( state ) => {}


  constructor() { 

  }

  ngOnInit() {
    this.user = {
      username: 'perro',
      email: 'perro@no.com',
      password: 'perro'
    }
  }



}
