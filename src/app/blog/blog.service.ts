import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class BlogService {
  posts = [];

  constructor(private http: Http) { }

    fetchAllPosts() {
        return this.http.get('https://jsonplaceholder.typicode.com/posts')
            .map((response) => {
                return response.json();
            });
    }


}
