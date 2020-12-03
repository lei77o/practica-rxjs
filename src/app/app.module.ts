import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ForkjoinComponent } from './components/forkjoin/forkjoin.component';
import { IntervalTimerComponent } from './components/interval-timer/interval-timer.component';
import { MapComponent } from './components/map/map.component';
import { MapFilterComponent } from './components/map-filter/map-filter.component';
import { ObservableNextErrorComponent } from './components/observable-next-error/observable-next-error.component';
import { VistaComponent } from './components/vista/vista.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DropdownComponent} from './shared/components/dropdown/dropdown.component';
import { SubjectsComponent } from './components/subjects/subjects.component';

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
    SubjectsComponent    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
