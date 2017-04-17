import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import {Coordinate} from './co-ordinate/co-ordinate.componenent';
import {AppService} from "./appService";
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";

@NgModule({
  imports:      [ BrowserModule,FormsModule,HttpModule ],
  declarations: [ AppComponent,Coordinate ],
  bootstrap:    [ AppComponent ],
  providers:[AppService]
})
export class AppModule { }
