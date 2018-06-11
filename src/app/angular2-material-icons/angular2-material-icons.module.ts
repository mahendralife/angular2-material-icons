import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SvgIconsDirective } from './svg-icons.directive';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material';

/**
 * impoer SVG icon libiary
 */
import { svgIcons } from './svgIcons';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ SvgIconsDirective ],
  exports: [ SvgIconsDirective ]
})
export class Angular2MaterialIconsModule {
  constructor(
    private iconRegistry: MatIconRegistry,
    private sanitizer: DomSanitizer
  ) {
    for (const key in svgIcons) {
      if (svgIcons.hasOwnProperty(key)) {
        const svgRef = sanitizer.bypassSecurityTrustHtml(
          `<svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24">${svgIcons[key]}</svg>`);
        iconRegistry.addSvgIconLiteral(key, svgRef);
      }
    }
  }
}
