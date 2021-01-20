import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-api',
  templateUrl: './api.component.html',
  styleUrls: ['./api.component.css']
})
export class ApiComponent implements OnInit {

  private url = 'https://jsonplaceholder.typicode.com/posts';

  posts: Post[];

  constructor(
    private apiService: ApiService
    ) { }

  ngOnInit(): void {
    this.apiService.getData(this.url).subscribe(data => {
      console.log(data);
    })
  }
}


export interface Post{
  userId?:number;
  id?:number;
  title:string;
  body:string;
}