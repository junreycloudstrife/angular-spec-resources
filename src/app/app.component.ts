import { Component } from '@angular/core';
import { Person } from './models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular Routing';
  // names = ['Juan', 'Jose', 'Pedro'];
  // persons:Person[] = [
  //   { firstName: 'Juan', lastName: 'Luna', age: 30 },
  //   { firstName: 'Jose', lastName: 'Rizal', age: 35 },
  //   { firstName: 'Pedro', lastName: 'Penduko', age: 25}
  // ]
}
