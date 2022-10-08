import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {User} from'../user';
import { LoginService } from './login.service';
import { NgToastService } from 'ng-angular-popup';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private route:Router, private loginService: LoginService, private toast: NgToastService) {
    this.usersList = this.loginService.getUsersList()
   }

  user: User = {}
  usersList: User[] = []
  isValidUsername: boolean = true
  isValidPassword: boolean = true

  public autenticate() {
    this.isValidUsername = true
    this.isValidPassword = true
    const found = this.usersList.find(user => user.username === this.user.username || user.password === this.user.password)
    if(found == null){
      this.toast.error({detail:"Login", summary:"Enter your username and password", duration: 5000})
      this.isValidUsername = false
      this.isValidPassword = false
    } 
    if(found !=null && found.username !== this.user.username){
      this.toast.error({detail:"Login", summary:"Username wrong!", duration: 5000})
      this.isValidUsername = false
    } 
    if(found !=null && found.password !== this.user.password){
      this.toast.error({detail:"Login", summary:"Password wrong!", duration: 5000})
      this.isValidPassword = false
    } 
    if(found != null && found.username === this.user.username && found.password === this.user.password){
      this.toast.success({detail:"Welcome!", summary:"Welcome to our web site!", duration: 5000})
      this.route.navigateByUrl('/dashboard');
    }
  }

  ngOnInit(): void {}

}
