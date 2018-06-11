import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

import { FlexLayoutModule } from '@angular/flex-layout';
import { Angular2MaterialIconsModule  } from './angular2-material-icons/angular2-material-icons.module';
import { HeaderComponent } from './header/header.component';
import { ColorMenuComponent } from './header/color-menu/color-menu.component';
import { FooterComponent } from './footer/footer.component';
import { SearchbarComponent } from './searchbar/searchbar.component';
import { MaterialComponenentsModule } from './material.components.module';
import { AppRoutingModule , routingComponents } from './app.routing';
import { FilterPipe } from './filter';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SearchbarComponent,
    routingComponents,
    FilterPipe,
    ColorMenuComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    Angular2MaterialIconsModule,
    MaterialComponenentsModule,
    AppRoutingModule, FormsModule

  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
