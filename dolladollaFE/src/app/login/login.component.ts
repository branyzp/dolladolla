import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../models/user-model';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  currentUser: User = { email: '', password: '' };

  constructor(
    private router: Router,
  ) {}

  ngOnInit(): void {
    setTimeout(() => this.scrollToTop());
    
  }

  signUp() {
    this.router.navigate(['/signup']);
  }

  onLoginSuccess() {
    this.router.navigate(['/dashboard']);
  }

  scrollToTop() {
    const el = document.getElementById('login');
    el?.scrollIntoView();
  }

  // checkLogin(value: any,valid: any,form: any) {
  //   if (valid) {
  //     this.login();
  //   }
  // }

}
