import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appLinkBackground]'
})
export class LinkBackgroundDirective {
  constructor(private el: ElementRef, private renderer: Renderer2) { }

  @HostListener('mouseenter') onMouseEnter() {
    this.changeBackground('#804643'); 
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.changeBackground('#EDC5C3'); 
  }

  private changeBackground(color: string) {
    this.renderer.setStyle(this.el.nativeElement, 'background-color', color);
  }
}
