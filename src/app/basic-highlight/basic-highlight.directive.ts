import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appBasicHighLight]',
})
export class BasicHighLightDirective implements OnInit {
  constructor(private elementul: ElementRef) {
    elementul.nativeElement;
  }

  ngOnInit() {
    this.elementul.nativeElement.style.backgroundColor = 'green';
  }
}
