import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MarkFilterPipe } from './mark-filter.pipe';
import { ScoreFilterPipe } from './score-filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    MarkFilterPipe,
    ScoreFilterPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
