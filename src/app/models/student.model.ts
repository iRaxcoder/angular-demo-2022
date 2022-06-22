export interface Student {
  id: number
  name: string
  lastName: string
  code: string
  grade: number
}

let studentCounter: number = 0

export class Student implements Student {

  constructor(public name: string, public lastName: string, public code: string, public grade: number) {
    this.id = studentCounter++
  }

}