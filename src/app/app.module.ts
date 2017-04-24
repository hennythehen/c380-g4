import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import {EnrollmentViewComponent} from './enrollment-view.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent, EnrollmentViewComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
