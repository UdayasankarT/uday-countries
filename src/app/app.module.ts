import { HttpserviceService } from './https-sevice.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClient , HttpClientModule} from '@angular/common/http';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { Test2Component } from './test2/test2.component';
import { CountryListComponent } from './country-list/country-list.component';
import { StateListComponent } from './state-list/state-list.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    Test2Component,
    CountryListComponent,
    StateListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    HttpserviceService
  ],
  bootstrap: [AppComponent]
})
  

export class AppModule { }
