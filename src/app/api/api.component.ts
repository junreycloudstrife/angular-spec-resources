import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-api',
  templateUrl: './api.component.html',
  styleUrls: ['./api.component.css']
})
export class ApiComponent implements OnInit {

  private url = 'https://jsonplaceholder.typicode.com/posts';

  posts: Post[];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    console.log('onInit');
    this.getPosts().subscribe(posts => {
      console.log(posts);
      this.posts = posts as Post[];
    })
  }

  getPosts(){
    return this.http.get(this.url);
  }

}


export interface Post{
  userId?:number;
  id?:number;
  title:string;
  body:string;
}