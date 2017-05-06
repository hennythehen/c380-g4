/**
 * Created by kenny on 4/21/17.
 */
import { Injectable } from '@angular/core';
import { Course } from '../model/course';
import {COURSES, INITCOURSES} from '../model/mock-courses';

@Injectable()
export class CourseService {
  static pinnedCourses: Course[];
  constructor() {
    if (CourseService.pinnedCourses == null) {
      // TODO interact with server
      CourseService.pinnedCourses = INITCOURSES;
    }
  }
  getInitialCourses(): Course[] {
    CourseService.pinnedCourses = INITCOURSES;
    return CourseService.pinnedCourses;
  }
  getCourses(): Course[] {
    return COURSES;
  }
  private unpinCourse(course: Course) {
    for (let i = 0; i < CourseService.pinnedCourses.length; i++) {
      if (course === CourseService.pinnedCourses[i]) {
        CourseService.pinnedCourses.splice(i, 1);
        return;
      }
    }
  }

  private pinCourse(course: Course) {
    CourseService.pinnedCourses.push(course);
  }

  pinToggle(course: Course) {
    let alreadyPinned = false;
    for (let i = 0; i < CourseService.pinnedCourses.length; i++) {
      if (CourseService.pinnedCourses[i] === course) {
        alreadyPinned = true;
        break;
      }
    }
    if (alreadyPinned) {
      this.unpinCourse(course);
    } else {
      this.pinCourse(course);
    }
  }

  isCoursePinned(course: Course): boolean {
    for (let i = 0; i < CourseService.pinnedCourses.length; i++) {
      if (CourseService.pinnedCourses[i] === course) {
        return true;
      }
    }
    return false;
  }
}
