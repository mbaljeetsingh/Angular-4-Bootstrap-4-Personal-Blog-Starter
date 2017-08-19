import {AfterContentInit, Component, Input, OnChanges, OnInit} from '@angular/core';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit{
  @Input() posts = [];
  currentPost;

  constructor() { }

    ngOnInit() {
    }

}
