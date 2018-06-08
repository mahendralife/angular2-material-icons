import { Directive, ElementRef, Renderer } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material';
/**
 * impoer SVG icon libiary
 */
import { svgIcons } from './svgIcons';

@Directive({
  selector: 'icon , [icon]'
})
export class SvgIconsDirective {

  constructor(
    private renderer: Renderer,
    private el: ElementRef,
    iconRegistry: MatIconRegistry,
    sanitizer: DomSanitizer
    ) {
console.log("call");
    const svgName = el.nativeElement.getAttribute('svgIcon');
    if ( svgName ) {
      const svgIcon = svgIcons[svgName];
      if ( svgIcon ) {
        const svgRef = sanitizer.bypassSecurityTrustHtml(`<svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24">${svgIcon}</svg>`);
        iconRegistry.addSvgIconLiteral(svgName, svgRef);
      }

      let style: String = '';

      /** apply color on svg icons  */
      const color = el.nativeElement.getAttribute('color');
      if ( color) {
        style = `color:${color};`;
      }


      /** Apply size on svg icons*/
      const size = el.nativeElement.getAttribute('size');
      if (size ) {
        style += `width:${size}px; height:${size}px`;
      }

      el.nativeElement.setAttribute('style', style);

    } else {
      console.error('Invalid syntax add  svgIcon attribute on Tag mat-icon eg. <mat-icon icon svgIcon="hangouts"></mat-icon>');
    }
  }
}
