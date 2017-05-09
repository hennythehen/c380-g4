import {Injectable} from '@angular/core';
import {Course} from '../model/course';
import {DayOfWeek} from '../model/day-of-week.enum';
import {Section} from '../model/section';
import {EnrolledSection} from '../model/enrolled-section';
import {EnrollmentService} from './enrollment.service';

@Injectable()
export class ScheduleService {
  constructor(private enrollmentService: EnrollmentService) { }
  parseCourseDays(sect: EnrolledSection): DayOfWeek[] {
    const days: DayOfWeek[] = [];
    let c: string;
    for (let i = 0; i < sect.section.days.length; i += 1) {
      c = sect.section.days.charAt(i);
      switch (c) {
        case 'M':
          days.push(DayOfWeek.Mon);
          break;
        case 'T':
          if (sect.section.days[i + 1] === 'h') {
            days.push(DayOfWeek.Thu);
          } else {
            days.push(DayOfWeek.Tue);
          }
          break;
        case 'W':
          days.push(DayOfWeek.Wed);
          break;
        case 'F':
          days.push(DayOfWeek.Fri);
          break;
        case 'S':
          if (sect.section.days[i + 1] === 'a') {
            days.push(DayOfWeek.Sat);
          } else {
            days.push(DayOfWeek.Sun);
          }
          break;
      }
    }
    return days;
  }
  getClassesOnDay(d: DayOfWeek) {
    const enrolledSections = this.enrollmentService.getEnrolledSections();
    const classesOnDay: EnrolledSection[] = [];
    for (let i = 0; i < enrolledSections.length; i++) {
      if (this.containsDay(enrolledSections[i], d)) {
        classesOnDay.push(enrolledSections[i]);
      }
    }
    return classesOnDay;
  }
  private containsDay(enrolledSection: EnrolledSection, d) {
    const days = this.parseCourseDays(enrolledSection);
    for (let i = 0; i < days.length; i++) {
      // In this case, == cannot be changed to ===
      if (days[i] == d) {
        return true;
      }
    }
    return false;
  }
}
