import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { ProductComponent } from './product/product.component';
import {HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms';
import { MenuComponent } from './menu/menu.component';
import { ErrorComponent } from './error/error.component'; //Getting data from input 

const appRoute: Routes=[
  {path:'menu',component:MenuComponent},
  {path:'',component:NavComponent},
  {path:'**',component:ErrorComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    ProductComponent,
    MenuComponent,
    ErrorComponent
  ],
  imports: [
    RouterModule.forRoot(appRoute), //per routes
    FormsModule, //Getting data from input 
    HttpClientModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
