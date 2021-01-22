import { Component, OnInit } from '@angular/core';
import { PersonService } from '../person.service';
import { Person } from '../models';
import { Router } from '@angular/router';

@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.css']
})
export class PersonListComponent implements OnInit {

  title = "List of Person";

  persons:Person[];

  constructor(
    private personService: PersonService,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.persons = this.personService.getPersons();
    console.log(this.persons);
  }

  viewAddPersonForm(){
    this.router.navigate(['/add-person']);
  }

}
