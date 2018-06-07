import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SvgIconsDirective } from './svg-icons.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ SvgIconsDirective ],
  exports: [SvgIconsDirective]
})
export class Angular2MaterialIconsModule { }
