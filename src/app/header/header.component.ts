import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  sitename = 'Hello World';
  subtitle = '記載著 Will 在網路世界的學習心得與技術分享';
  logoid = 'logo';
  counter = 0;

  constructor() { }

  ngOnInit(): void {
    // Hook method
    // setTimeout(() => {
    //   this.sitename = 'The Will Will Web';
    // }, 2000);
  }

  changeTitle(event: MouseEvent) {
    this.counter++;
    console.log(event); // PointerEvent
    if (event.altKey) {
      this.sitename = 'The Will Will Web';
    }
  }

}
