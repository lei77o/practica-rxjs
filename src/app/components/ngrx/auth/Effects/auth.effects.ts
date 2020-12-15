import { Inject, Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, mergeMap, tap} from 'rxjs/operators';

import { Action} from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';

import { 
    AuthActionTypes,
    LoggedIn,
    LoggedUser,
    LoginUser,
    LogoutAuth,
    LoginUserError
} from '../Actions/auth.actions';
import { AuthService } from '../Service/auth.service';

@Injectable ({
    providedIn: 'root'
})

export class AuthEffects {
    
    constructor(private http:HttpClient, private actions$: Actions, private AuthService: AuthService){}

    @Effect()
    LoginUserError$: Observable<Action> = this.actions$.pipe( ofType<LoginUserError>(AuthActionTypes.LoginUserError),
    tap( v => console.log( 'LoggedAPI error', v.payload)),
    map( _ => {
        return { type: 'LOGIN_API_ERROR', payload: 'Email or password incorrect'}
    });

    @Effect()
    LoginUser$: Observable<Action> = this.actions$.pipe( 
        ofType<LoginUser>(AuthActionTypes.LoginUser),
        tap( v => console.log( 'LoginUser effect', v)),
        mergeMap( action => {
         return this.AuthService.login({
                email: action.payload.user,
                username: '',
                password: action.payload.pass
            });
        )
    );


    @Effect()
    LoggedUser$: Observable<Action> = this.actions$.pipe( ofType<LoginUserError>(AuthActionTypes.LoginUserError),
    tap( v => console.log( 'LoggedAPI error', v.payload)),
    map( data => {
        return { type: '', payload:data }
    })


    
}