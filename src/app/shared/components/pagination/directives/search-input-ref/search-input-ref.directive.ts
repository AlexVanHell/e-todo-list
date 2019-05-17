import { Directive, Input, Output, EventEmitter, HostListener } from '@angular/core';

@Directive({
  selector: '[appPaginationSearchInputRef]'
})
export class SearchInputRefDirective {
  @Input('fields') searchParams: string [] = [];
  @Output() onInput: EventEmitter<string>;

  constructor() {
    this.onInput = new EventEmitter();
  }

  @HostListener('input', ['$event.target.value'])
  handleInput(value: string): void {
    this.onInput.emit(value);
  }

}
