import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Import FormsModule

import { AppComponent } from './app.component';
import { TemperaturaComponent } from './Temperaturas/temperatura/temperatura.component';
import { TemperaturaConverterComponent } from './temperatura-converter/temperatura-converter.component';

@NgModule({
  declarations: [
    AppComponent,
    TemperaturaComponent,
    TemperaturaConverterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
