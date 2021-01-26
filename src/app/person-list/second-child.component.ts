import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-second-child',
  template: `
    <p>
      second-child works!
    </p>
  `,
  styles: [
  ]
})
export class SecondChildComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
