import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private httpClient: HttpClient) { }

  getUserInfos() {
    return this.httpClient.get<UserInfo[]>('http://127.0.0.1:4900');
  }
}

export interface UserInfo {
  userId: string;
  userName: string;
  email: string;
  role: string;
}
