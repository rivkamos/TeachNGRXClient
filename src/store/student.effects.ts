import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { StudentService } from '../services/student.service';
import * as StudentActions from './student.actions';

@Injectable()
export class StudentEffects {
  loadStudents$ = createEffect(() =>
    this.actions$.pipe(
      ofType(StudentActions.loadStudents),
      mergeMap(() =>
        this.studentService.getStudents().pipe(
          map(students => StudentActions.loadStudentsSuccess({ students })),
          catchError(error => of(StudentActions.loadStudentsFailure({ error })))
        )
      )
    )
  );

  addStudent$ = createEffect(() =>
    this.actions$.pipe(
      ofType(StudentActions.addStudent),
      mergeMap(action =>
        this.studentService.addStudent(action.student).pipe(
          map(student => StudentActions.addStudentSuccess({ student })),
          catchError(error => of(StudentActions.addStudentFailure({ error })))
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private studentService: StudentService
  ) {}
}