import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-child',
  template: `
    <p>
      first-child works!
    </p>
  `,
  styles: [
  ]
})
export class FirstChildComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
