import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';
import { Pagina1Module } from './pagina1/pagina1.module';

@NgModule({
  declarations: [
    AppComponent
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,

    HomeModule,
    Pagina1Module
  ],

  providers: [],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
