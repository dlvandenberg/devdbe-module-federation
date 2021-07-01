import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AnotherModule } from './another/another.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AnotherModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
