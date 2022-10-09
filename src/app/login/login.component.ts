import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {User} from'../user';
import { LoginService } from './login.service';
import { NgToastService } from 'ng-angular-popup';
import gsap from "gsap";

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
  newUser: User = {}
  usersList: User[] = []
  isValidUsername: boolean = true
  isValidPassword: boolean = true
  isValidNewUserUsername: boolean = true
  isValidNewUserPassword: boolean = true
  isValidMail: boolean = true
  showDialogRegister: boolean = false

  public cancel(){
    this.showDialogRegister = false
    this.newUser = {}
  }

  public addNewUser(){
    this.isValidNewUserUsername = true
    this.isValidNewUserPassword = true
    this.isValidMail = true
    if(this.newUser.username == null || this.newUser.username === ''){
      this.toast.error({detail:"Registration", summary:"Complete all required fields", duration: 5000})
      this.isValidNewUserUsername = false
    }
    if(this.newUser.password == null || this.newUser.password === ''){
      this.toast.error({detail:"Registration", summary:"Complete all required fields", duration: 5000})
      this.isValidNewUserPassword = false
    }
    if(!/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,50})+$/.test(String(this.newUser.mail))){
      this.toast.error({detail:"Registration", summary:"Enter valid mail", duration: 5000})
      this.isValidMail= false
    }
    if(this.isValidNewUserUsername && this.isValidNewUserPassword && this.isValidMail){
      this.loginService.addNewUser(this.newUser)
      this.usersList = this.loginService.getUsersList()
      this.showDialogRegister = false
      this.newUser = {}
      this.toast.success({detail:"Sing up", summary:"Your registration has been successful!", duration: 5000})
    }
  }

  public openDialogRegister(){
    this.showDialogRegister = true
  }

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

  ngOnInit(): void { gsap.from(".logo-animated", { duration: 2.5, ease: "bounce.out", height:0  }) }
 
}
