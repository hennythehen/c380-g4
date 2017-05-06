/**
 * Created by kenny on 4/21/17.
 */
import { Injectable } from '@angular/core';
import { Course } from '../model/course';
import {COURSES, INITCOURSES} from '../model/mock-courses';

@Injectable()
export class CourseService {
  pinnedCourses: Course[];
  getInitialCourses(): Course[] {
    this.pinnedCourses = INITCOURSES;
    return this.pinnedCourses;
  }
  getCourses(): Course[] {
    return COURSES;
  }
}
