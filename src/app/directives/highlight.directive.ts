import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[claimHighlight]'
})
export class HighlightDirective {

  @Input() color: string;

  constructor(private el: ElementRef) { }

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight('#E8EAF6');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight(null);
  }

  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }

}
