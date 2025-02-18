import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { StudentComponent } from "../components/student/student.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, StudentComponent, StudentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'student-app';
  student = "ppp"
}
