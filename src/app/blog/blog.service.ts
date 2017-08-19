import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class BlogService {
  posts = [];

  constructor(private http: Http) { }

  fetchAllPosts() {
    this.http.get('https://jsonplaceholder.typicode.com/posts')
        .map((response) => {
          return response.json();
        })
        .subscribe((data) => {
          console.log(data);
          this.posts = data;
        });
  }

  getAllPosts() {
    // console.log(this.posts);
    return this.posts.slice();
  }

}
