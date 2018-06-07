import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { MatIconModule } from '@angular/material/icon';
import { SvgIconsDirective } from './svg-icons.directive';

@NgModule({
  declarations: [
    AppComponent,
    SvgIconsDirective
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatIconModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
