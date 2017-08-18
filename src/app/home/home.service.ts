import { Injectable } from '@angular/core';

@Injectable()
export class HomeService {
  data;

  constructor() { }

  getPageData() {
    this.data = {
        pagetitle: 'Home',
        backgroundColor: '#7fc1cc',
        img: {
            src: 'mypic.jpg',
            alt: 'Baljeet Singh',
        },
        name: 'Baljeet Singh',
        designation: 'Full Stack Web & Mobile Developer, Music Lover.'
    };
    return this.data;
  }

}
