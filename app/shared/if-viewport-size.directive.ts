import {Directive, ElementRef, HostListener, Input, OnInit} from '@angular/core';
import {StoreService} from './store.service';

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[ifViewportSize]'
})
export class IfViewportSizeDirective implements OnInit {

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.isShowEl();
  }

  @Input('ifViewportSize') ifViewportSize: string;

  constructor(private el: ElementRef, public store: StoreService) {
    this.isShowEl();
  }

  isShowEl() {
    if (this.store.conf[this.ifViewportSize] > window.innerWidth) {
      this.el.nativeElement.style.display = 'none';
    } else {
      this.el.nativeElement.style.display = 'block';
    }
  }

  ngOnInit(): void {
    this.isShowEl();
  }


}
