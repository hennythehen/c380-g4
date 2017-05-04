/**
 * Created by kenny on 4/21/17.
 */
import { Component, OnInit } from '@angular/core';
import { CourseService } from './course.service';
import { Course } from './course';

@Component({
  selector: 'app-enrollment-view',
  providers: [CourseService],
  templateUrl: 'enrollment-view.component.html',
  styles: [``]
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
  onUnpin(course: Course) {
    for (let i = 0; i < this.courses.length; i++) {
      if (this.courses[i] === course) {
        this.courses.splice(i, 1);
        return;
      }
    }
  }
}
