import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PersonService } from '../person.service';
import { Person } from '../models';

@Component({
  selector: 'app-add-person',
  templateUrl: './add-person.component.html',
  styleUrls: ['./add-person.component.css']
})
export class AddPersonComponent implements OnInit {

  title = "Add Person Information";

  firstName;
  lastName;
  age;
  nationality;
  gender;

  constructor(
    private router: Router,
    private personService: PersonService
    ) { }

  ngOnInit(): void {
  }

  viewPersonList(){
    this.router.navigate(['/person-list']);
  }

  addPerson(person: Person){
    this.personService.addPerson(person);
    this.router.navigate(['/person-list']);
  }

}
