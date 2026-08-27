import { Component } from '@angular/core';
import { StudentService } from '../services/student.service';
import { ChangeDetectorRef } from '@angular/core';
import { Student as StudentModel } from '../models/student';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [FormsModule],
  selector: 'app-student',
  styleUrl: './student.css',
  templateUrl: './student.html',
})
export class Student {
  constructor(
    private studentService: StudentService,
    private cdr: ChangeDetectorRef,
  ) {
    this.getStudents();
  }
  students: StudentModel[] = [];
  selectedStudent: StudentModel | null = null;

  formStudent: StudentModel = {
    name: '',
    email: '',
    phone: '',
    age: 0,
    course: '',
    gender: '',
  };

  resetForm() {
    this.formStudent = {
      name: '',
      email: '',
      phone: '',
      age: 0,
      course: '',
      gender: '',
    };
    this.selectedStudent = null;
  }

  cancelEdit() {
    this.resetForm();
  }

  getStudents() {
    this.studentService.getStudents().subscribe((students) => {
      this.students = students;

      this.cdr.detectChanges(); // Trigger change detection to update the view
    });
  }

  getStudentById(id: number) {
    this.studentService.getStudentById(id).subscribe((student) => {});
  }

  addStudent(student: StudentModel) {
    this.studentService.addStudent(student).subscribe((newStudent) => {
      this.getStudents(); // Refresh the list after creating a new student
      this.cdr.detectChanges(); // Trigger change detection to update the view
      this.resetForm(); // Reset the form after adding a student
    });
  }

  editStudent(student: StudentModel) {
    this.selectedStudent = student;
    this.formStudent = { ...student };
  }

  updateStudent(id: string, student: StudentModel) {
    this.studentService.updateStudent(id, student).subscribe((updatedStudent) => {
      this.getStudents(); // Refresh the list after updating a student
      this.cdr.detectChanges(); // Trigger change detection to update the view
      this.cancelEdit(); // Reset the form and cancel edit mode
    });
  }

  deleteStudent(id: string) {
    this.studentService.deleteStudent(id).subscribe(() => {
      this.getStudents(); // Refresh the list after deleting a student
      this.cdr.detectChanges(); // Trigger change detection to update the view
    });
  }
}
