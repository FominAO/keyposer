import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MarkFilterPipe } from './mark-filter.pipe';
import { ScoreFilterPipe } from './score-filter.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { CodeTabsComponent } from './code-tabs/code-tabs.directive';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { PwaService } from './sw.service';

@NgModule({
  declarations: [
    AppComponent,
    MarkFilterPipe,
    ScoreFilterPipe,
    CodeTabsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [PwaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
