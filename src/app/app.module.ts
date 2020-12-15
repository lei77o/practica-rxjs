//Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

//Ngrx
import { StoreModule } from '@ngrx/store';
import { EffectsModule }  from '@ngrx/effects';
import { StoreRouterConnectingModule, routerReducer} from '@ngrx/router-store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';


//Configs
import { AppRoutingModule } from './app-routing.module';

//Components
import { ForkjoinComponent } from './components/rxjs/forkjoin/forkjoin.component';
import { IntervalTimerComponent } from './components/rxjs/interval-timer/interval-timer.component';
import { MapComponent } from './components/rxjs/map/map.component';
import { MapFilterComponent } from './components/rxjs/map-filter/map-filter.component';
import { ObservableNextErrorComponent } from './components/rxjs/observable-next-error/observable-next-error.component';
import { SubjectsComponent } from './components/rxjs/subjects/subjects.component';
import { VistaComponent } from './components/rxjs/vista/vista.component';
import { DropdownComponent} from './shared/components/dropdown/dropdown.component';
import { IncrementadorComponent } from './components/testing/incrementador/incrementador.component';

//FontAwesome
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';



@NgModule({
  declarations: [
    AppComponent,
    ForkjoinComponent,
    IntervalTimerComponent,
    MapComponent,
    MapFilterComponent,
    ObservableNextErrorComponent,
    VistaComponent,
    DropdownComponent,
    SubjectsComponent ,
    IncrementadorComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    FontAwesomeModule,
    FormsModule,
    //StoreModule.forRoot(),
    EffectsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
