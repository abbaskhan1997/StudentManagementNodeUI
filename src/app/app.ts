import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Student } from './student/student';
import {Login} from './login/login';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Student, Login],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('StudentManagementNodeUI');
}
