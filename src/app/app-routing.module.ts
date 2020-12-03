import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MergeMapSubscriber } from 'rxjs/internal/operators/mergeMap';
import { ForkjoinComponent } from './components/forkjoin/forkjoin.component';
import { IntervalTimerComponent } from './components/interval-timer/interval-timer.component';
import { MapFilterComponent } from './components/map-filter/map-filter.component';
import { MapComponent } from './components/map/map.component';
import { ObservableNextErrorComponent } from './components/observable-next-error/observable-next-error.component';
import { SubjectsComponent } from './components/subjects/subjects.component';

const routes: Routes = [

  { path: 'filter', component:  MapFilterComponent},
  { path: 'interval', component:  IntervalTimerComponent},
  { path: 'observable', component: ObservableNextErrorComponent},
  { path: 'maps', component: MapComponent},
  { path: 'forkjoin', component: ForkjoinComponent},
  { path: 'subject', component: SubjectsComponent},

];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
}

