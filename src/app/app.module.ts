import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BasichighlightDirective } from './basichighlight.directive';
import { AdvancedhighlightDirective } from './advancedhighlight.directive';

@NgModule({
  declarations: [
    AppComponent,
    BasichighlightDirective,
    AdvancedhighlightDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
