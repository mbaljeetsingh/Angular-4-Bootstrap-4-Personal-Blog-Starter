import { Component, OnInit } from '@angular/core';
import {BlogService} from './blog.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
    posts;

    constructor(private blogService: BlogService) {}

    ngOnInit() {
        this.blogService
            .fetchAllPosts()
            .subscribe((data) => {
                // console.log(data);
                this.posts = this.blogService.posts = data;
            });
    }

}
