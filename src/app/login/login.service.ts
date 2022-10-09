import { Injectable } from '@angular/core';
import {User} from'../user';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }

  userList: User[] = []

  addNewUser(user: User){
    this.userList.push(user)
  }

  getUsersList(){
    return this.userList
  }
}
