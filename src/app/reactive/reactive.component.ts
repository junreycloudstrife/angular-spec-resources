import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent implements OnInit {
  userForm: FormGroup;
  constructor() { }

  ngOnInit(): void {
    this.userForm = new FormGroup({
      firstName: new FormControl(),
      lastName: new FormControl(),
      age: new FormControl(),
      address: new FormGroup({
        barangay: new FormControl(),
        municipality: new FormControl()
      })
    })
  }

  test(value:any){
    console.log(value.address.barangay);
  }

}
