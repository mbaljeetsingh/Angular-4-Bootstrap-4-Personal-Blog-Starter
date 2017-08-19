import { Component, OnInit } from '@angular/core';
import {BlogService} from '../blog.service';
import {Http} from '@angular/http';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts = [];
  currentPost;

  constructor(private blogService: BlogService, private http: Http) { }

  ngOnInit() {
    // console.log(this.blogService.getAllPosts());
    // this.posts = this.blogService.getAllPosts();
      this.http.get('https://jsonplaceholder.typicode.com/posts')
          .map((response) => {
              return response.json();
          })
          .subscribe((data) => {
              // console.log(data);
              this.posts =  data;
          });
    console.log(this.posts);
  }

}
