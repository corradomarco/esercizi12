import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { FormDemooComponent } from './form-demoo/form-demoo.component';
import {   //Importare le funzionalità nella nostra applicazione
 FormsModule,
 ReactiveFormsModule
} from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    FormDemooComponent
  ],
  imports: [
    BrowserModule,
      FormsModule,  //Anche qui
   ReactiveFormsModule,
    BrowserModule, NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
