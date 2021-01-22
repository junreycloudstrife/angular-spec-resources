import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Person } from '../models';
import { PersonService } from '../person.service';

@Component({
  selector: 'app-update-person',
  templateUrl: './update-person.component.html',
  styleUrls: ['./update-person.component.css']
})
export class UpdatePersonComponent implements OnInit {

  title = "Update Person Information";

  personForm: FormGroup;
  currentIndex: number;

  constructor(
    private router: Router,
    private personService: PersonService
    ) { }

  ngOnInit(): void {
    this.currentIndex = this.personService.currentIndex;
    console.log(this.currentIndex);
    const person = this.personService.getPerson(this.currentIndex);
    console.log(person);
    this.personForm = new FormGroup({
      firstName: new FormControl(person.firstName),
      lastName: new FormControl(person.lastName),
      age: new FormControl(person.age),
      nationality: new FormControl(person.nationality),
      gender: new FormControl(person.gender)
    })
  }

  updatePerson(person: Person){
    this.personService.updatePerson(this.currentIndex, person);
    this.router.navigate(['/person-list']);
  }

  cancelUpdatePerson(){
    this.router.navigate(['/person-list']);
  }

}
