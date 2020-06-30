import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';
import { ReactiveFormsUnsubscribeComponent } from './reactive-forms-unsubscribe/reactive-forms-unsubscribe.component';
import { HttpRequestComponent } from './http-request/http-request.component';
import { MapObservableComponent } from './map-observable/map-observable.component';
import { TakeoneComponent } from './takeone/takeone.component';
import { TakeWhileComponent } from './take-while/take-while.component';
import { MemoryLeakComponent } from './memory-leak/memory-leak.component';


const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'reactive-forms', component: ReactiveFormsComponent },
  { path: 'reactive-forms-unsubscribe', component: ReactiveFormsUnsubscribeComponent },
  { path: 'http-request', component: HttpRequestComponent },
  { path: 'map', component: MapObservableComponent },
  { path: 'take-one', component: TakeoneComponent },
  { path: 'memory-leak', component: MemoryLeakComponent },
  { path: 'take-while', component: TakeWhileComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
