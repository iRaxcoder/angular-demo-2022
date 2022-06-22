import { Injectable } from "@angular/core";
import { Student } from "../models/student.model";

@Injectable()
export class StudentService {
    studentList: Student[] = []

    constructor() {
        this.studentList = [
            new Student("Randall", "Mora", "B95212", 8),
            new Student('Juan Carlos', 'Sequeira', 'B97452', 9),
            new Student('María', 'Orocú', 'B53212', 10),
            new Student('Roberto', 'Carlos', 'B12345', 7),
            new Student('José', 'José', 'A56567', 2),
        ]
    }

    addStudent(student: Student) {
        this.studentList.push(student)
    }

    findStudentById(id: number): Student {
        let student: Student = this.studentList.find(student => student.id == id)
        return student
    }

    editStudent(id: number, student: Student) {
        let studentEdit = this.studentList.find(student => student.id == id)
        if (studentEdit != undefined) {
            studentEdit.name = student.name
            studentEdit.code = student.code
            studentEdit.lastName = student.lastName
            studentEdit.grade = student.grade
            alert("Modificado con éxito")
        } else {
            alert("No se ha podido modificar el estudiante con id: " + id)
        }
    }

    deleteStudent(id: number) {
        let newStudentArray = this.studentList.filter(student => student.id != id)
        this.studentList = newStudentArray
        return this.studentList
    }

    getStudents(): Student[] {
        return this.studentList
    }
}