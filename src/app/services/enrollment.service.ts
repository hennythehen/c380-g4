import {Injectable} from '@angular/core';
import {EnrollmentStatus} from '../model/enrollment-status.enum';
import {EnrolledSection} from '../model/enrolled-section';
import {Course} from '../model/course';
import {Section} from '../model/section';
import {ScheduleService} from './schedule.service';

@Injectable()
export class EnrollmentService {
  static enrolledSections: EnrolledSection[] = new Array();
  static waitlistedSections: EnrolledSection[] = new Array();
  constructor(private scheduleService: ScheduleService) {}
  enroll(c: Course, s: Section) {
    try {
      const es = this.attemptToEnroll(c, s);
      switch (es.status) {
        case EnrollmentStatus.Enrolled:
          EnrollmentService.enrolledSections.push(es);
          break;
        case EnrollmentStatus.Waitlisted:
          EnrollmentService.waitlistedSections.push(es);
          break;
      }
      this.scheduleService.addEnrolledClass(es);
    } catch (e) {
      throw e;
    }
  }
  getEnrolledSections() {
    return EnrollmentService.enrolledSections;
  }

  private attemptToEnroll(c: Course, s: Section): EnrolledSection {
    const es: EnrolledSection = new EnrolledSection();
    es.isCourse = c;
    es.section = s;

    if (this.scheduleService.getScheduleConflicts(es).length > 0) {
      throw new Error('Schedule conflict');
    }
    es.status = EnrollmentStatus.Enrolled;
    return es;
  }
  private sectionIsFull(eSection: EnrolledSection): boolean {
    return false;
  }
  private isAlreadyEnrolled(eSection: EnrolledSection): boolean {
    for (let i = 0; i < EnrollmentService.enrolledSections.length; i++) {
      if (eSection === EnrollmentService.enrolledSections[i]) {
        return true;
      }
    }
    return false;
  }
}
