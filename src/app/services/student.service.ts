import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { Student } from '../student/student';
import { Student as StudentModel } from '../models/student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http: HttpClient) { }
  private apiUrl = 'http://localhost:3000/api/students';

  getStudents() {
    return this.http.get<StudentModel[]>(this.apiUrl);
  }

  getStudentById(id: number) {
    return this.http.get<StudentModel[]>(`${this.apiUrl}/${id}`);
  }

  addStudent(student: StudentModel) {
    return this.http.post(this.apiUrl, student);
  }

  updateStudent(id: string, student: StudentModel) {
    return this.http.put(`${this.apiUrl}/${id}`, student);
  }

  deleteStudent(id: string) {
    return this.http.delete<{ message: string }>(`${this.apiUrl}/${id}`);
  }
}