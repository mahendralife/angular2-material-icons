import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { MatIconModule } from '@angular/material/icon';

import { Angular2MaterialIconsModule  } from './angular2-material-icons/angular2-material-icons.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatIconModule,
    Angular2MaterialIconsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
