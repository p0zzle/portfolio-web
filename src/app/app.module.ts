import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Iconos FontAwesome.
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { icon } from '@fortawesome/fontawesome-svg-core';
import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faCoffee, faEnvelope, faHome, faToolbox, faUser, faUserAlt } from '@fortawesome/free-solid-svg-icons';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
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
  constructor(library: FaIconLibrary){
    library.addIcons(faGithub)
    library.addIcons(faTwitter)
    library.addIcons(faCoffee)
    library.addIcons(faHome)
    library.addIcons(faUserAlt)
    library.addIcons(faToolbox)
    library.addIcons(faEnvelope)
    library.addIcons(faLinkedin)
  }
 }
