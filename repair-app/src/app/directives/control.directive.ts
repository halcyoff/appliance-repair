import {Directive, ElementRef, Input, OnInit, HostListener, Output} from '@angular/core';
import {EventEmitter} from '@angular/core';

import {Keycodes} from '../enums/keycodes.enum';

@Directive({
  selector: '[appControl]'
})
export class ControlDirective {
  @Input() public set focus(focusElement: boolean) {
    if (focusElement === true) {
      this.elementRef.nativeElement.focus();
    }
  }
  @Input() public handleEnterPress = false;

  @Output() public enterKeyPressed = new EventEmitter();

  constructor(private elementRef: ElementRef) { }

  @HostListener('keypress', ['$event'])
  public onKeyPress(keyboardEvent: KeyboardEvent): void {
    const keyCode = keyboardEvent.keyCode;
    this.submitOnEnter(keyCode);
  }

  private submitOnEnter(keyCode: number): void {
    if (this.handleEnterPress && keyCode === Keycodes.enter) {
      this.enterKeyPressed.emit();
    }
  }
}
