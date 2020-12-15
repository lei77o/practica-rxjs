import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { environment } from 'src/environments/environment';

//Ngrx
import { StoreModule } from '@ngrx/store';
import { EffectsModule }  from '@ngrx/effects';
import { StoreRouterConnectingModule, routerReducer} from '@ngrx/router-store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { reducers } from '../reducer/reducers';
import { metaReducers } from '../reducer/reducers';

const NGRX_IMPORTS = [
  StoreModule.forRoot(reducers, { metaReducers }),
  StoreRouterConnectingModule.forRoot({stateKey: ' router'}),
  EffectsModule.forRoot([]),
  StoreDevtoolsModule.instrument({
    name: 'AngularChatNgrx',
    logOnly: environment.production,
    maxAge: 25
  }),
  EffectsModule.forRoot([])
]

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    FormsModule,
    ...NGRX_IMPORTS
  ]


})
export class AuthModule { }
