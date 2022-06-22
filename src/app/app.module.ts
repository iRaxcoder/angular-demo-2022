import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentComponent } from './components/student.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { FormsModule } from '@angular/forms';
import { StudentService } from './services/student.service';
import { EditComponent } from './components/edit.component';
import { CreateComponent } from './components/create.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentComponent,
    EditComponent,
    CreateComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule
  ],
  exports:[
  ],
  providers: [StudentService],
  bootstrap: [AppComponent]
})
export class AppModule { }

