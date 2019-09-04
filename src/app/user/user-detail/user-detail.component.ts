import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
  test: string;

  constructor() {
  }

  ngOnInit() {
    this.test = "测试一把";
  }

}
