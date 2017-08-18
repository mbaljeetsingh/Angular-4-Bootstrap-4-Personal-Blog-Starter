import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  bgColor = '#7fc1cc';

  onChangePageBackground(backgroundColor){
    console.log(backgroundColor);
    this.bgColor = backgroundColor;
  }
}
