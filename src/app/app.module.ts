import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroesComponent } from './heroes/heroes.component';
import { MessagesComponent } from './messages/messages.component';

import { AppRoutingModule } from './app-routing.module';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
    //aqui no me funcionaba si añadia messagecomponent
  ],
  declarations: [
    AppComponent,//componente principal de la aplicación
    DashboardComponent,
    HeroesComponent,//muestra la lista de heroes
    HeroDetailComponent,
    MessagesComponent//muestra los mensajes
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }