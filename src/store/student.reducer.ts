import { createReducer, on } from '@ngrx/store';
import { Student } from '../models/student.model';
import * as StudentActions from './student.actions';

export interface StudentState {
  students: Student[];
  error: any;
}

export const initialState: StudentState = {
  students: [],
  error: null
};

export const studentReducer = createReducer(
  initialState,
  on(StudentActions.loadStudentsSuccess, (state, { students }) => ({ ...state, students })),
  on(StudentActions.loadStudentsFailure, (state, { error }) => ({ ...state, error })),
  on(StudentActions.addStudentSuccess, (state, { student }) => ({ ...state, students: [...state.students, student] })),
  on(StudentActions.addStudentFailure, (state, { error }) => ({ ...state, error }))
);