/**
 * Created by kenny on 4/21/17.
 */
import { Component, OnInit } from '@angular/core';
import { CourseService } from '../services/course.service';
import { Course } from '../model/course';
import {EnrollmentService} from '../services/enrollment.service';

@Component({
  selector: 'app-enrollment-view',
  providers: [CourseService, EnrollmentService],
  templateUrl: 'enrollment-view.component.html',
  styles: [``]
})
export class EnrollmentViewComponent implements OnInit {
  title: 'Enrollment View';
  courses: Course[];
  selectedCourse: Course;
  constructor(
    private courseService: CourseService,
    private enrollmentService: EnrollmentService) {}
  ngOnInit(): void {
    this.getCourses();
  }
  getCourses(): void {
    this.courses = this.courseService.getInitialCourses();
  }
  onUnpin(course: Course) {
    for (let i = 0; i < this.courses.length; i++) {
      if (this.courses[i] === course) {
        this.courses.splice(i, 1);
        return;
      }
    }
  }
}
