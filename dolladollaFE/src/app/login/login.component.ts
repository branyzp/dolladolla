import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
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

  login(f:NgForm) {
    console.log(f);
  }

  checkForm(value: string, valid: boolean | null, f:NgForm) {
    if (valid) {
      this.login(f);
    }
  }

}
