import {Injectable} from '@angular/core';
import {Course} from '../model/course';
import {DayOfWeek} from '../model/day-of-week.enum';
import {Section} from '../model/section';
import {EnrolledSection} from '../model/enrolled-section';
import {EnrollmentService} from './enrollment.service';
import {Schedule} from '../model/schedule';

@Injectable()
export class ScheduleService {
  static schedule: Schedule;
  constructor(
    // private enrollmentService: EnrollmentService
  ) {
    if (ScheduleService.schedule == null) {
      ScheduleService.schedule = new Schedule();
    }
  }
  addEnrolledClass(s: EnrolledSection) {
    ScheduleService.schedule.addSection(s);
  }
  getClassesOnDay(d: DayOfWeek): EnrolledSection[] {
    return ScheduleService.schedule.getClassesOnDay(d);
  }
  getScheduleConflicts(s: EnrolledSection): EnrolledSection[] {
    // console.log(ScheduleService.schedule.classesOnDay);
    return ScheduleService.schedule.getScheduleConflicts(s);
  }
}
