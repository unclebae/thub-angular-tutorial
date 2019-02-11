import { Component, OnInit } from '@angular/core';
import { UserServiceService, UserInfo } from './user-service.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {

  userInfos: UserInfo[] = [];

  constructor(private userService: UserServiceService) { }

  ngOnInit() {
    const userServiceObject = this.userService.getUserInfos();
    userServiceObject.subscribe((userData: UserInfo[]) => {
      this.userInfos = userData;
    });
  }

}

