import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Iconos FontAwesome.
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';

import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  // Imports de Font Awesome
  constructor(library: FaIconLibrary){}
 }
