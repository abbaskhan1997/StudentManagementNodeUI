import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import {Router} from '@angular/router'
import { RouterLink } from '@angular/router';

@Component({
  imports: [ReactiveFormsModule, RouterLink],
  selector: 'app-login',
  styleUrl: './login.css',
  templateUrl: './login.html',
})
export class Login {
  constructor(private authService: AuthService,
    private router:Router
  ) {}
  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });

  login() {
    const email = this.loginForm.value.email;
  const password = this.loginForm.value.password;
    this.authService.login(email!, password!).subscribe({
      next: (response) => {
        localStorage.setItem('token', response.token);
         this.router.navigate(['/students']);
      },
      error: (error) => {
        console.error('Login failed:', error);
      },
    });
  }
}
