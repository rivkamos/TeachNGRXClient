import { Student } from '../models/student.model';

export interface AppState {
  students: StudentState;
}

export interface StudentState {
  students: Student[];
  error: any;
}