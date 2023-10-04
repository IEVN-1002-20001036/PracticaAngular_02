import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material/material.module';
import { MenuComponent } from './menu/menu.component';
import { TemperatureConverterComponent } from './temperature-converter/temperature-converter.component';
import { MultiplicionComponent } from './multiplicion/multiplicion.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    TemperatureConverterComponent,
    MultiplicionComponent, 
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }