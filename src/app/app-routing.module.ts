import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentComponent } from './components/student.component';
import { EditComponent } from './components/edit.component';
import { CreateComponent } from './components/create.component';

const routes: Routes = [
  { path: 'student-component', component: StudentComponent},
  { path: 'edit-student/:studentId', component: EditComponent},
  { path: 'create-student', component: CreateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
