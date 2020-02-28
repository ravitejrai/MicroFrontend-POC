import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BlueModule } from './blue/blue.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, BlueModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
