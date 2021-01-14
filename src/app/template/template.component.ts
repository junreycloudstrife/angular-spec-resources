import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent implements OnInit {
  username;
  password;

  constructor() { }

  ngOnInit(): void {
  }

  test(data: any){
    console.log(data);
  }
}
