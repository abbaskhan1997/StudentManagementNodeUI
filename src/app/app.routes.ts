import { Routes } from '@angular/router';
import {Login} from './login/login';
import {Register} from './register/register';
import {Student} from './student/student'

export const routes: Routes = [
  {
    path:'login',
    component: Login
  },

  {
    path: 'register',
    component: Register
  },

  {
    path: 'students',
    component: Student
  }
];
