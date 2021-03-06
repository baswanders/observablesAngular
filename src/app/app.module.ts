import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { HomeComponent } from './home/home.component';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsUnsubscribeComponent } from './reactive-forms-unsubscribe/reactive-forms-unsubscribe.component';
import { HttpRequestComponent } from './http-request/http-request.component';
import { MapObservableComponent } from './map-observable/map-observable.component';
import { TakeoneComponent } from './takeone/takeone.component';
import { TakeUntilComponent } from './take-until/take-until.component';
import { MemoryLeakComponent } from './memory-leak/memory-leak.component';
import { OtherHistoryComponent } from './reactive-forms/other-history/other-history.component';
import { CombineLatestComponent } from './combine-latest/combine-latest.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ReactiveFormsComponent,
    ReactiveFormsUnsubscribeComponent,
    HttpRequestComponent,
    MapObservableComponent,
    TakeoneComponent,
    TakeUntilComponent,
    MemoryLeakComponent,
    OtherHistoryComponent,
    CombineLatestComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
