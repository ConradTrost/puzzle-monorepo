import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TfLayoutModule } from '@puzzles-monorepo/tf-layout';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, TfLayoutModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
