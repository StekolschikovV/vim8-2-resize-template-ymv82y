import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {IfViewportSizeDirective} from './shared/if-viewport-size.directive';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { TestComponent } from './test.component';

import { APP_CONFIG, WIDTH_CONFIG } from './app.config';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, TestComponent, IfViewportSizeDirective ],
  bootstrap:    [ AppComponent ],
  providers: [
    { provide: APP_CONFIG, useValue: WIDTH_CONFIG }
  ]
})
export class AppModule { }
