import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Student } from '../models/student.model';
import { StudentService } from '../services/student.service';

@Component({
  selector: 'app-edit',
  templateUrl: '../views/student/edit.component.html',
  styleUrls: ['../styles/student.component.css']
})
export class EditComponent implements OnInit {
  id: number
  student: Student
  constructor(private studentService: StudentService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['studentId']
    this.student = this.studentService.findStudentById(this.id)
  }

  editStudent() {
    if (this.student.name.trim().length == 0 || this.student.lastName.trim().length == 0 || this.student.code.trim().length == 0) {
      alert("Debe completar todos los campos")
    } else {
      this.studentService.editStudent(this.id, this.student)
    }
  }

  backToIndex() {
    this.router.navigateByUrl('/student-component');
  }

}
