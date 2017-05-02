/**
 * Created by kenny on 4/21/17.
 */
import { Injectable } from '@angular/core';
import { Course } from './course';
import {COURSES, INITCOURSES} from './mock-courses';

@Injectable()
export class CourseService {
  getInitialCourses(): Course[] {
    return INITCOURSES;
  }
  getCourses(): Course[] {
    return COURSES;
  }
}
