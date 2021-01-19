import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent implements OnInit {
  username;
  password;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  test(data: any){
    console.log(data);
    setTimeout(() => {
      this.router.navigate(['/api']);
  }, 3000);
}

}
