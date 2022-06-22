import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Student } from '../models/student.model';
import { StudentService } from '../services/student.service';

@Component({
  selector: 'app-create',
  templateUrl: '../views/student/create.component.html',
  styleUrls: ['../styles/student.component.css']
})
export class CreateComponent implements OnInit {
  public name: string
  public lastName: string
  public code: string
  public grade: number

  constructor(private studentService: StudentService, private router: Router, private route: ActivatedRoute) {
    this.name = ""
    this.lastName = ""
    this.code = ""
    this.grade = 0
  }

  ngOnInit(): void {
  }

  addStudent() {
    if (this.name.trim().length == 0 || this.lastName.trim().length == 0 || this.code.trim().length == 0) {
      alert("Debe completar todos los campos")
    } else {
      this.studentService.addStudent(new Student(this.name, this.lastName, this.code, this.grade))
      alert("Estudiante insertado con éxito")
      this.clearFields()
    }
  }

  clearFields() {
    this.name = ""
    this.lastName = ""
    this.code = ""
    this.grade = 0
  }

  backToIndex() {
    this.router.navigateByUrl('/student-component');
  }

}
