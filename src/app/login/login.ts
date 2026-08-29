import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  imports: [ReactiveFormsModule],
  selector: 'app-login',
  styleUrl: './login.css',
  templateUrl: './login.html',
})
export class Login {
  constructor(private authService: AuthService) {}
  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });

  login() {
    const email = this.loginForm.value.email;
  const password = this.loginForm.value.password;
    this.authService.login(email!, password!).subscribe({
      next: (response) => {
        console.log('Login successful:', response);
        localStorage.setItem('token', response.token);
      },
      error: (error) => {
        console.error('Login failed:', error);
      },
    });
  }
}
