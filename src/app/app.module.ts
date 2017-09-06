import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { DataTablesModule } from 'angular-datatables';

import { AppComponent } from './app.component';
import { GridComponentComponent } from './grid-component/grid-component.component';

@NgModule({
  declarations: [
    AppComponent,
    GridComponentComponent
  ],
  imports: [
    BrowserModule,
    DataTablesModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
