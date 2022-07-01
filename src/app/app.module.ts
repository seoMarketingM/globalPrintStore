import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HomePrincipalComponent } from './@pageUser/home-principal/home-principal.component';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HomePrincipalComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
 
  ],


 
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
