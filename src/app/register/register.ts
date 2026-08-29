import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../services/auth.service';

@Component({
  imports: [ReactiveFormsModule],
  selector: 'app-register',
  styleUrl: './register.css',
  templateUrl: './register.html',
})
export class Register {

  registerForm;

  constructor(private fb: FormBuilder,
    private authService: AuthService
  ) {

    this.registerForm = this.fb.group({
      name: [''],
      email: [''],
      password: ['']
    });

  }
  
  register() {
     const name = this.registerForm.value.name ?? '';
  const email = this.registerForm.value.email ?? '';
  const password = this.registerForm.value.password ?? '';
    this.authService.register(name, email, password).subscribe({
      next: (response) => {
        console.log('Registration successful', response);
        this.registerForm.reset();
      },
      error: (error) => {
        console.error('Registration failed', error);
      }
    });
  }

}