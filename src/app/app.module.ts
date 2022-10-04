import { Injector, NgModule, DoBootstrap } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { createCustomElement } from '@angular/elements';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule],
  providers: [],
  exports: [AppComponent],
})
export class AppModule implements DoBootstrap {
  constructor(private injector: Injector) {
    const el = createCustomElement(AppComponent, { injector: this.injector });
    customElements.define('wc-alert', el);
  }

  ngDoBootstrap() {}
}
