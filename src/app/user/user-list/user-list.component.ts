import {Component, OnInit} from '@angular/core';
import {User, UserService} from '../user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  constructor(private userService: UserService) {
  }

  listOfData: User[] = new Array<User>();

  ngOnInit(): void {
    let users = this.userService.getUsers();
    users.forEach(user => {
      this.listOfData.push(user);
    });
  }
}
