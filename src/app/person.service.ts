import { Injectable } from '@angular/core';
import { Person } from './models';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  currentIndex: number;

  private persons:Person[] = [
    { firstName:'Juan', lastName:'Luna', age:30, nationality: 'Filipino', gender: 'male' },
    { firstName:'Jose', lastName:'Rizal', age:34, nationality: 'Filipino', gender: 'male' },
    { firstName:'Pedro', lastName:'Penduko', age:25, nationality: 'Filipino', gender: 'male' },
    { firstName:'Uzumaki', lastName:'Naruto', age:18, gender: 'male' },
    { firstName:'Cloud', lastName:'Strife', age:20, gender: 'male' },
  ]

  constructor() { }

  getPersons(){
    return this.persons;
  }

  getPersonIndex(person: Person){
    return this.persons.indexOf(person);
  }

  getPerson(index: number){
    return this.persons[index];
  }

  addPerson(person: Person){
    this.persons.push(person);
  }

  deletePerson(person: Person){
    this.persons.splice(this.persons.indexOf(person), 1);
  }

  updatePerson(index: number, person: Person){
    this.persons[index] = person;
  }
}
