import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }

  getUsersList(){
    return [
      {
        username: 'apiazza',
        password: 'dontuch'
      }
    ]
  }
}
