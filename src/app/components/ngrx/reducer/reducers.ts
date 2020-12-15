import { ActionReducerMap, createSelector, createFeatureSelector, ActionReducer, MetaReducer } from  '@ngrx/store';

import { environment } from '../../../../environments/environment';

import { RouterStateUrl } from "../../shared/utils";

import * as fromRouter from '@ngrx/router-store';

import { storeFreeze } from 'ngrx-store-freeze';

import * fromAuth from '../auth/auth.reducer';

import { FormatInputPathObject } from 'path';
import { RouterState } from '@angular/router';

export interface State {
    auth: fromAuth.state,
    router: fromRouter.RouterReducerState<RouterStateUrl>;
}

export const reducers: ActionReducerMap<State|any> = {
    auth: fromAuth.AuthReducer,
    router: fromRouter.routerReducer
}

export function logger(reducer: ActionReducer<State>): ActionReducer<State>{
    return (state: State, action: any): State => {
        console.log("State", state);
        console.log("action", action);
        return reducer(state, action);
    }
}

export const metaReducers: MetaReducer<State>[] = !environment.production ? [logger, storeFreeze] : [];

export const getAuthState = createFeatureSelector<fromAuth.State>('auth');

export const getAuth = createSelector{
    getAuthState,
    fromAuth.getAuthState

}
