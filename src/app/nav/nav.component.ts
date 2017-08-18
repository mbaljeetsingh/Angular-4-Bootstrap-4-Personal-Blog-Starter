import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  @Input() bgColor;
  @Input() bgClass;
  @Output() ChangePageBackground = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  onSubmit(form) {
    // console.log(form.value.pageBackgroundColor);
    this.ChangePageBackground.emit(form.value.pageBackgroundColor);
  }

}
