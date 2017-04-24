/**
 * Created by kenny on 4/21/17.
 */
import { Component, OnInit } from '@angular/core';
import { CourseService } from './course.service';
import { Course } from './course';

@Component({
  selector: 'app-enrollment-view',
  providers: [CourseService],
  template:
  `
    <div class="enrollment-view">
      <app-course-tile 
        *ngFor="let course of courses"
        [course]="course">
      </app-course-tile>
    </div>
  `,
  styles: [`    
    
  `]
})
export class EnrollmentViewComponent implements OnInit {
  title: 'Enrollment View';
  courses: Course[];
  selectedCourse: Course;
  constructor(private courseService: CourseService) {}
  ngOnInit(): void {
    this.getCourses();
  }
  getCourses(): void {
    this.courses = this.courseService.getInitialCourses();
  }
}
