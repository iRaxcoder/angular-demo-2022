import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Student } from '../models/student.model'
import { StudentService } from '../services/student.service'


let studentList: Student[]

@Component({
  selector: 'app-student',
  templateUrl: '../views/student/index.component.html',
  styleUrls: ['../styles/student.component.css']
})

export class StudentComponent implements OnInit {

  public search: string

  constructor(public studentService: StudentService) {
    studentList = []
  }

  //table info
  displayedColumns: string[] = ['ID', 'Código', 'Nombre', 'Apellido', 'Nota', 'Action'];
  dataSource = new MatTableDataSource(studentList);

  ngOnInit(): void {
    this.getAllStudents()
    this.refresh()
  }

  getAllStudents() {
    studentList = this.studentService.getStudents()
  }

  deleteStudent(id: number) {
    studentList = this.studentService.deleteStudent(id)
    this.refresh()
  }

  findStudentByKeyword(search: string) {
    var filteredList = studentList.filter
      (student =>
        student.code.toLocaleLowerCase().includes(search.toLowerCase()) ||
        student.grade.toString().includes(search) ||
        student.name.toLowerCase().includes(search.toLowerCase()) ||
        student.lastName.toLowerCase().includes(search.toLowerCase())
      )
    studentList = filteredList
    this.refresh()
    this.getAllStudents()
  }

  refresh() {
    this.dataSource = new MatTableDataSource(studentList);
  };
}
