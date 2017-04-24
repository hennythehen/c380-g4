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
    <div>
      <div *ngFor="let course of courses">
        <div style="background-color: lightgray; float: left; margin-right: 10px; padding: 15px">
          <h3>{{course.getName()}}</h3>
          <h4>{{course.getTitle()}}</h4>
      </div>
      </div>
    </div>
  `
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
