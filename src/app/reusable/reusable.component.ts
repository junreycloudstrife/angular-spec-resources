import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Person } from '../models';
import { PersonService } from '../person.service';

@Component({
  selector: 'app-reusable',
  templateUrl: './reusable.component.html',
  styleUrls: ['./reusable.component.css']
})
export class ReusableComponent implements OnInit {

  @Input() person:Person;
  hidden = true;

  constructor(
    private personService: PersonService,
    private router: Router
    ) { }

  ngOnInit(): void {
  }

  showHide(){
    this.hidden = !this.hidden;
  }

  deletePerson(person: Person){
    this.personService.deletePerson(person);
  }

  viewUpdatePersonForm(person: Person){
    this.personService.currentIndex = this.personService.getPersonIndex(person);
    this.router.navigate(['/update-person']);
  }
}
