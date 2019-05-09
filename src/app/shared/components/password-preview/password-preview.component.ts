import { Component, OnInit, AfterViewInit, AfterContentInit, ContentChild, ViewChild, ElementRef, OnDestroy } from '@angular/core';
import { PasswordPreviewDirective } from '../../directives/password-preview/password-preview.directive';
import { Subscription } from 'rxjs';

import { FaIconComponent } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-password-preview',
  templateUrl: './password-preview.component.html',
  styleUrls: ['./password-preview.component.scss']
})
export class PasswordPreviewComponent implements OnInit, AfterViewInit, AfterContentInit, OnDestroy {
  @ContentChild(PasswordPreviewDirective) icon: PasswordPreviewDirective;
  @ContentChild('input') input: ElementRef;
  @ContentChild(FaIconComponent) iconType: FaIconComponent;

  clickListenerSubscription: Subscription;
  flag: boolean = true;

  constructor() { }

  ngOnInit() {
  }

  ngAfterContentInit() {
    this.clickListenerSubscription = this.icon.clickEmitter
      .subscribe(() => {
        (this.input.nativeElement as HTMLInputElement).setAttribute('type', this.flag ? 'text' : 'password');
        this.flag = !this.flag;
        this.iconType.iconProp = this.flag ? 'eye-slash' : 'eye';
        this.iconType.ngOnChanges({});
      });
  }

  ngAfterViewInit() {

  }

  ngOnDestroy() {
    this.clickListenerSubscription.unsubscribe();
  }

}
