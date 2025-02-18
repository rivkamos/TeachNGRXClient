import { Component, OnInit, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Student } from '../../models/student.model';
import { AppState } from '../../store/student.state';
import { loadStudents, addStudent } from '../../store/student.actions';
import { selectAllStudents, selectStudentError } from '../../store/student.selectors';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css'],
  standalone: true,
  imports: [AsyncPipe]
})
export class StudentComponent implements OnInit {
  students$: Observable<Student[]>;
  error$: Observable<any>;
  private store = inject(Store)
  
  constructor() {
    this.students$ = this.store.select(selectAllStudents);
    this.error$ = this.store.select(selectStudentError);
  }

  ngOnInit(): void {
    this.store.dispatch(loadStudents());
  }

  addStudent(student: Student): void {
    this.store.dispatch(addStudent({ student }));
  }
}