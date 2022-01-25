import { APP_BASE_HREF } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './core/material/material-module';
import { EmptyRouteComponent } from './empty-route/empty-route.component';
import { NavbarComponent } from './menu/navbar/navbar.component';
import { SidebarComponent } from './menu/sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    EmptyRouteComponent,
    SidebarComponent,
    NavbarComponent,
    FooterComponent
  ],

  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    
    AppRoutingModule,
    MaterialModule
  ],

  providers: [
    { provide: APP_BASE_HREF, useValue: '/' }
  ],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
