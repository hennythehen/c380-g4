import {Injectable} from '@angular/core';
import {EnrollmentStatus} from '../model/enrollment-status.enum';
import {EnrolledSection} from '../model/enrolled-section';
import {Course} from '../model/course';
import {Section} from '../model/section';

@Injectable()
export class EnrollmentService {
  static enrolledSections: EnrolledSection[];
  static waitlistedSections: EnrolledSection[];
  enroll(c: Course, s: Section) {
    const es = this.attemptToEnroll(c, s);
    switch (es.status) {
      case EnrollmentStatus.Enrolled:
        EnrollmentService.enrolledSections.push(es);
        break;
      case EnrollmentStatus.Waitlisted:
        EnrollmentService.waitlistedSections.push(es);
        break;
    }
  }

  private attemptToEnroll(c: Course, s: Section): EnrolledSection {
    const es: EnrolledSection = <EnrolledSection>s;
    es.status = EnrollmentStatus.Enrolled;
    es.isCourse = c;
    return es;
  }

  getEnrolledSections() {
    return EnrollmentService.enrolledSections;
  }

  // getClassesWithStatus(status: EnrollmentStatus) {
  //   switch (status) {
  //     case EnrollmentStatus.Enrolled: {
  //       return this.getEnrolledClasses();
  //     }
  //     case EnrollmentStatus.Waitlisted: {
  //       return this.getWaitlistedClasses();
  //     }
  //   }
  // }

}
