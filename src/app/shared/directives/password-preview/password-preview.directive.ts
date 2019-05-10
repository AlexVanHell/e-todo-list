import { Directive, OnInit, Host, HostListener } from '@angular/core';
import { Subject } from 'rxjs';

@Directive({
  selector: '[appPasswordPreview]'
})
export class PasswordPreviewDirective implements OnInit {
  iconName: string;
  clickEmitter: Subject<any>;

  constructor() {
    this.clickEmitter = new Subject();
  }

  ngOnInit() {

  }

  @HostListener('click', ['$event.target'])
  onClick(event: any): void {
    this.clickEmitter.next('');
  }
}
