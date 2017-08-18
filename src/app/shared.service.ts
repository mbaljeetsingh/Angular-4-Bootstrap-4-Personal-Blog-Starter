import { Injectable } from '@angular/core';
import {Title} from '@angular/platform-browser';

@Injectable()
export class SharedService {
  public assetsUrl = '../../assets/';

  constructor(private titleService: Title) {}

  public setTitle (newTitle: string){
    this.titleService.setTitle(newTitle);
  }

}
