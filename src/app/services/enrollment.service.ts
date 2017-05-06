import {Injectable} from '@angular/core';
import {EnrollmentStatus} from '../model/enrollment-status.enum';
import {EnrolledSection} from '../model/enrolled-section';
import {Course} from '../model/course';

@Injectable()
export class EnrollmentService {
  pinnedCourses: Course[];
  getClassesWithStatus(status: EnrollmentStatus) {
    switch (status) {
      case EnrollmentStatus.Enrolled: {
        return this.getEnrolledClasses();
      }
      case EnrollmentStatus.Waitlisted: {
        return this.getWaitlistedClasses();
      }
    }
  }
  getEnrolledClasses(): EnrolledSection[] {
    let enrolled: EnrolledSection[];
    return enrolled;
  }
  getWaitlistedClasses(): EnrolledSection[] {
    let waitlisted: EnrolledSection[];
    return waitlisted;
  }
  pinCourse(course: Course) {
    let alreadyPinned = false;
    for (let i = 0; i < this.pinnedCourses.length; i++) {
      if (this.pinnedCourses[i] === course) {
        alreadyPinned = true;
      }
    }
    if (!alreadyPinned) {
      this.pinnedCourses.push(course);
      console.log('pinned', this.pinnedCourses);
    }
  }
}
