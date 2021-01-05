//Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

//Ngrx
import { StoreModule } from '@ngrx/store';
import { Actions, EffectsModule }  from '@ngrx/effects';
import { StoreRouterConnectingModule, routerReducer} from '@ngrx/router-store';



//Configs
import { AppRoutingModule } from './app-routing.module';

//Components
import { ForkjoinComponent } from './components/rxjs/forkjoin/forkjoin.component';
import { IntervalTimerComponent } from './components/rxjs/interval-timer/interval-timer.component';
import { MapComponent } from './components/rxjs/map/map.component';
import { MapFilterComponent } from './components/rxjs/map-filter/map-filter.component';
import { ObservableNextErrorComponent } from './components/rxjs/observable-next-error/observable-next-error.component';
import { SubjectsComponent } from './components/rxjs/subjects/subjects.component';
import { HeaderComponent } from './components/header/header.component';
import { DropdownComponent} from './shared/components/dropdown/dropdown.component';
import { IncrementadorComponent } from './components/testing/incrementador/incrementador.component';

//import { contadorReducer } from './components/ngrx/contador/contador.reducer';
//import { HijoComponent } from './components/ngrx/contador/hijo/hijo.component';
//import { NietoComponent } from './components/ngrx/contador/nieto/nieto.component';

//FontAwesome
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
//import {} from '';
import { FooterComponent } from './components/footer/footer.component';
import { ViewNgrxComponent } from './components/ngrx/view-ngrx/view-ngrx.component';

import { environment } from '../environments/environment';


@NgModule({
  declarations: [
    AppComponent,
    ForkjoinComponent,
    IntervalTimerComponent,
    MapComponent,
    MapFilterComponent,
    ObservableNextErrorComponent,
    HeaderComponent,
    DropdownComponent,
    SubjectsComponent ,
    IncrementadorComponent,
    FooterComponent,
    //HijoComponent,
    //NietoComponent,
    ViewNgrxComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    FontAwesomeModule,
    FormsModule,
    EffectsModule,
    //StoreModule.forRoot(contadorReducer)
    //StoreModule.forRoot({ count: counterReducer })
    /*StoreDevtoolsModule.instrument({
      maxAge: 25, //manejar 25 acciones
      logOnly: environment.production //para impedir que los usuarios puedan hacerlo en produccion
    }),*/

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
