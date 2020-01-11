import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appAllowAlphabetsOnly]'
})
export class AllowAlphabetsOnlyDirective {

  constructor(private el: ElementRef) { }
  @HostListener('input', ['$event']) onInputChange(event) {
    const initialValue = this.el.nativeElement.value;

    this.el.nativeElement.value = initialValue.replace(/[^a-zA-z]*/g, '');

    if (initialValue !== this.el.nativeElement.value) {
      event.stopPropagation();
    }
  }
}
