import { Directive, ElementRef } from '@angular/core';

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[icon] , mat-icon[svgIcon], [svgIcon]'
})
export class SvgIconsDirective {
  constructor(
    private el: ElementRef) {
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
  }
}
