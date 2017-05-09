/**
 * Created by kenny on 4/21/17.
 */
import { Component, OnInit } from '@angular/core';
import { CourseService } from '../services/course.service';
import { Course } from '../model/course';
import {EnrollmentService} from '../services/enrollment.service';
import {Section} from '../model/section';
import {ScheduleService} from '../services/schedule.service';

@Component({
  selector: 'app-enrollment-view',
  providers: [CourseService, EnrollmentService, ScheduleService],
  templateUrl: 'enrollment-view.component.html',
  styleUrls: ['enrollment-view.component.scss']
})
export class EnrollmentViewComponent implements OnInit {
  title: 'Enrollment View';
  displayedCourses: Course[];
  selectedCourse: Course;
  constructor(
    private courseService: CourseService,
    private enrollmentService: EnrollmentService) {}
  ngOnInit(): void {
    this.getCourses();
  }
  getCourses(): void {
    this.displayedCourses = this.courseService.getInitialCourses();
  }
  onUnpin(course: Course) {
    this.courseService.pinToggle(course);
  }
  onEnroll(section: Section, course: Course) {
    try {
      this.enrollmentService.enroll(course, section);
    } catch (e) {
      alert(e.message);
    }
  }
}
