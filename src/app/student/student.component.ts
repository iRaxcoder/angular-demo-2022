import { Component, OnInit,ChangeDetectorRef } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

interface Student{
  name: string
  lastName: string
  code: string
  grade: number
}

let studentList: Student[]

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})

export class StudentComponent implements OnInit {

  //model info
  public name: string
  public lastName: string
  public code: string
  public grade: number;

  //table info
  displayedColumns: string[] = ['Código', 'Nombre', 'Apellido', 'Nota'];
  dataSource = new MatTableDataSource(studentList);
  constructor() {
    studentList=[]
    this.name=""
    this.lastName=""
    this.code=""
    this.grade=0
   }

  ngOnInit(): void {
    let studentExample: Student = { name: "Randall", lastName: "Mora", code: "B95212", grade: 10 }
    studentList.push(studentExample)
  }

  addStudent() {
    if(this.name.length==0 ||this.lastName.length==0||this.code.length==0){
      alert("Debe completar todos los campos")
    }else{
      studentList.push({ name: this.name, lastName: this.lastName, code: this.code, grade: this.grade })
      this.refresh();
      alert("Estudiante insertado con éxito")
    }
  }

  refresh() {
    this.dataSource=new MatTableDataSource(studentList);
    };
}
