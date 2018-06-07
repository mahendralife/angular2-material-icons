import { Directive, ElementRef } from '@angular/core';
// import { Renderer } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material';
/**
 * impoer SVG icon libiary
 */
import { svgIcons } from './svgIcons';

@Directive({
  selector: '[icon]'
})
export class SvgIconsDirective {

  constructor(
    private el: ElementRef,
    // private renderer: Renderer,
    iconRegistry: MatIconRegistry,
    sanitizer: DomSanitizer
    ) {


    const svgName = el.nativeElement.getAttribute('svgIcon');
    if ( svgName ) {
      const svgIcon = svgIcons[svgName];
      if ( svgIcon ) {
        const svgRef = sanitizer.bypassSecurityTrustHtml(`<svg xmlns="http://www.w3.org/2000/svg" >${svgIcon}</svg>`);
        iconRegistry.addSvgIconLiteral(svgName, svgRef);
      }


      /** apply color on svg icons  */
      const color = el.nativeElement.getAttribute('color');
      if ( color) {
        el.nativeElement.setAttribute('style', `color: ${color};`);
      }

    } else {
      console.error('Invalid syntax add  svgIcon attribute on Tag mat-icon eg. <mat-icon icon svgIcon="hangouts"></mat-icon>');
    }
  }
}
