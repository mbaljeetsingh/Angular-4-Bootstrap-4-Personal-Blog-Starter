import {Component, OnInit} from '@angular/core';
import {SharedService} from '../shared.service';
import {HomeService} from './home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  assetsUrl;
  home;
  constructor(private sharedService: SharedService, private homeService: HomeService) { }

  ngOnInit() {
    this.home = this.homeService.getPageData();
    this.sharedService.setTitle(this.home.pagetitle);
    this.assetsUrl = this.sharedService.assetsUrl;
  }

}
