import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MergeMapSubscriber } from 'rxjs/internal/operators/mergeMap';
import { ForkjoinComponent } from './components/rxjs/forkjoin/forkjoin.component';
import { IntervalTimerComponent } from './components/rxjs/interval-timer/interval-timer.component';
import { MapFilterComponent } from './components/rxjs/map-filter/map-filter.component';
import { MapComponent } from './components/rxjs/map/map.component';
import { ObservableNextErrorComponent } from './components/rxjs/observable-next-error/observable-next-error.component';
import { SubjectsComponent } from './components/rxjs/subjects/subjects.component';
import { IncrementadorComponent } from './components/testing/incrementador/incrementador.component';

const routes: Routes = [

  { path: 'filter', component:  MapFilterComponent},
  { path: 'interval', component:  IntervalTimerComponent},
  { path: 'observable', component: ObservableNextErrorComponent},
  { path: 'maps', component: MapComponent},
  { path: 'forkjoin', component: ForkjoinComponent},
  { path: 'subject', component: SubjectsComponent},
  { path: 'incrementador', component: IncrementadorComponent},
  
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
}

