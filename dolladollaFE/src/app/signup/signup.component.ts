import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Form, NgForm } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { User } from '../models/user-model';
import { SignupService } from '../services/signup.service';


@Component({
 
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  newUser: User = { email: '', password: '', firstName: '', lastName: '' };

  constructor(
    private router: Router,
    private signupService: SignupService,
  ) { }

  ngOnInit(): void {
    setTimeout(() => this.scrollToTop());
  }

  login() {
    this.router.navigate(['/login']);
  }

  signUp(f: NgForm) {
    this.signupService.addUser(f.value).subscribe((response: User) => {
      console.log(response);
      f.reset();
      this.router.navigate(['/dashboard']);
    }),
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    
    // console.log((this.newUser));
  }

  scrollToTop() {
    const el = document.getElementById('signup');
    el?.scrollIntoView();
  }

  onSignUpSuccess() {
    this.router.navigate(['/dashboard']);
  }

  checkForm(value: string, valid: boolean | null, f:NgForm) {
    if (valid) {
      this.signUp(f);
    }
  }

  

}
