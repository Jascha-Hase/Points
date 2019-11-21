import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { Router } from '@angular/router';
import {FormBuilder, FormGroup} from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loggedIn: Boolean;
  userName: string;
  userPassword: string;
  wrongCombination: Boolean;

  options: FormGroup;


  constructor(private authService: AuthService, private router: Router, fb: FormBuilder) {
    this.loggedIn = false;
    this.options = fb.group({
      hideRequired: true,
      floatLabel: 'auto',
    });
  }

  ngOnInit() {
  }

  tryToLogin() {
    if (this.authService.login(this.getUserName(), this.getUserPassword())) {
      this.router.navigate(['']);
    } else {
      if (this.userName !== null && this.userPassword !== null) {
        this.userName = '';
        this.userPassword = '';
        this.wrongCombination = true;
      }
    }
  }
  getUserName() {
    return this.userName;
  }
  getUserPassword() {
    return this.userPassword;
  }
  logout() {
    this.loggedIn = false;
  }
}
