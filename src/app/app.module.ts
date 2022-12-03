import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PassengerComponent } from './passenger/passenger.component';
import { ProductComponent } from './product/product.component';
import { QuotesComponent } from './quotes/quotes.component';
import { TodoComponent } from './todo/todo.component';
import {HttpClientModule} from '@angular/common/http';
import { NavComponent } from './nav/nav.component'
import { RouterModule, Routes } from '@angular/router';
const myRouter:Routes=[
  {
    path:"",
    component:PassengerComponent
  },
  {
    path:"product",
    component:ProductComponent
  },
  {
    path:"quotes",
    component:QuotesComponent
  },
  {
    path:"todo",
    component:TodoComponent

  }
]

@NgModule({
  declarations: [
    AppComponent,
    PassengerComponent,
    ProductComponent,
    QuotesComponent,
    TodoComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(myRouter)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
