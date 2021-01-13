import { Component, OnInit, Input } from '@angular/core';
import { Person } from '../models';

@Component({
  selector: 'app-reusable',
  templateUrl: './reusable.component.html',
  styleUrls: ['./reusable.component.css']
})
export class ReusableComponent implements OnInit {
  @Input() name = '';
  @Input() person:Person = {firstName: '', lastName: '', age: 0};

  constructor() { }

  ngOnInit(): void {
  }

}
