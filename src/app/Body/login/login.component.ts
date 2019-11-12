import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  openListView: Boolean;
  userName: string;
  userPassword: string;
  wrongCombination: Boolean;
  constructor() { 
    this.openListView = false;
   }

  ngOnInit() {
  }

  tryToLogin(){
    this.getUserName();
    this.getUserPassword();
    if(this.userName === 'coyo' && this.userPassword === 'coyo1'){
      this.openListView = true;
    } else {
      if(this.userName !== null && this.userPassword !== null){
      this.userName = '';
      this.userPassword = '';
      this.wrongCombination = true;
    }}
  }
  getUserName(){
    return this.userName;
  }
  getUserPassword(){
    return this.userPassword;
  }
}
