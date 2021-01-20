import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent implements OnInit {
  userForm: FormGroup;

  private url = "https://jsonplaceholder.typicode.com/users";

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.userForm = new FormGroup({
      firstName: new FormControl(),
      lastName: new FormControl(),
      age: new FormControl(),
      address: new FormGroup({
        barangay: new FormControl(),
        municipality: new FormControl()
      })
    });

    this.apiService.getData(this.url).subscribe(data => {
      console.log(data);
    })
  }

  test(value:any){
    console.log(value.address.barangay);
  }

}
