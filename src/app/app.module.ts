import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductlistComponent } from './product/productlist/productlist.component';
import { ProductListPipe } from './product-list.pipe';
import { OperasBasComponent } from './formularios/operas-bas/operas-bas.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Suma2Component } from './formlularios/suma2/suma2.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductlistComponent,
    ProductListPipe,
    OperasBasComponent,
    Suma2Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
