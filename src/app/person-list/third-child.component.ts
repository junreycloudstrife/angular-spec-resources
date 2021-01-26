import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-third-child',
  template: `
    <p>
      third-child works!
    </p>
  `,
  styles: [
  ]
})
export class ThirdChildComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
