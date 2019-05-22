import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-switch',
  templateUrl: './switch.component.html',
  styleUrls: ['./switch.component.scss']
})
export class SwitchComponent implements OnInit {
  @Output() toggle: EventEmitter<boolean>;
  @Input() id: string = '';
  @Input() label: string = '';
  @Input() checked: boolean;

  constructor() {
    this.toggle = new EventEmitter();
  }

  ngOnInit() {
  }

  handleChange(event: Event): void {
    event.preventDefault();
    let value = this.checked || false;
    this.toggle.emit(!value);
  }

}
