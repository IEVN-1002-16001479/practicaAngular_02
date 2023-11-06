import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppComponent } from './app.component';
import { TemperaturaComponent } from './temperatura/temperatura.component';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MultiplicacionComponent } from './multiplicacion/multiplicacion.component';
import { MaterialModule } from './material/material/material.module';
import { CinepolisComponent } from './cinepolis/cinepolis.component';
import { MenuComponent } from './menu/menu.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
@NgModule({
  declarations: [
    AppComponent,
    TemperaturaComponent,
    MultiplicacionComponent,
    CinepolisComponent,
    MenuComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    RouterModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
