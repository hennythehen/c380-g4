import {Injectable} from '@angular/core';
import {EnrollmentStatus} from '../model/enrollment-status.enum';
import {EnrolledSection} from '../model/enrolled-section';
import {Course} from '../model/course';
import {Section} from '../model/section';

@Injectable()
export class EnrollmentService {
  static enrolledSections: EnrolledSection[] = new Array();
  static waitlistedSections: EnrolledSection[] = new Array();
  constructor() {
    // if (EnrollmentService.enrolledSections == null) {
    //   EnrollmentService.enrolledSections = [];
    // }
    // if (EnrollmentService.waitlistedSections == null) {
    //   EnrollmentService.enrolledSections = [];
    // }
  }
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
    console.log(EnrollmentService.enrolledSections);
  }

  private attemptToEnroll(c: Course, s: Section): EnrolledSection {
    let es: EnrolledSection = new EnrolledSection();
    es.status = EnrollmentStatus.Enrolled;
    es.isCourse = c;
    es.section = s;
    return es;
  }

  getEnrolledSections() {
    return EnrollmentService.enrolledSections;
  }
}
