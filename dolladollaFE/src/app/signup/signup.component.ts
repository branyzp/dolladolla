import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { User } from '../models/user-model';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  newUser: User = { email: '', password: '', firstName: '', lastName: '' };

  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {
    setTimeout(() => this.scrollToTop());
  }

  login() {
    this.router.navigate(['/login']);
  }

  scrollToTop() {
    const el = document.getElementById('signup');
    el?.scrollIntoView();
  }

  onSignUpSuccess() {
    this.router.navigate(['/dashboard']);
  }

  

}
