import {Section} from './section';
import {DayOfWeek} from './day-of-week.enum';
import {ScheduleService} from '../services/schedule.service';
import {EnrolledSection} from './enrolled-section';
import {TimeInterval} from './time-interval';

export class Schedule {
  classesOnDay: EnrolledSection[][];
  constructor() {
    this.classesOnDay = [];
    for (let i = 1; i <= 7; i++) {
      this.classesOnDay[i] = [];
    }
  }
  addSection(s: EnrolledSection) {
    const classDays: DayOfWeek[] = s.section.parseCourseDays();
    for (let i = 0; i < classDays.length; i++) {
      const day = classDays[i];
      this.classesOnDay[day].push(s);
    }
  }
  getScheduleConflicts(s: EnrolledSection): EnrolledSection[] {
    const daysOfClass: DayOfWeek[] = s.section.parseCourseDays();
    const conflictingSections: EnrolledSection[] = [];
    for (let i = 0; i < daysOfClass.length; i++) {
      const day = daysOfClass[i];
      for (let j = 0; j < this.classesOnDay[day].length; j++) {
        const es: EnrolledSection = this.classesOnDay[day][j];
        if (TimeInterval.intervalsOverlap(es.section.timeInterval, s.section.timeInterval)) {
          conflictingSections.push(es);
        }
      }
    }
    if (conflictingSections.length > 0) {
      conflictingSections.push(s);
    }
    return conflictingSections;
  }
  getClassesOnDay(d: DayOfWeek): EnrolledSection[] {
    return this.classesOnDay[d];
  }
}

// const enrolledSections = this.enrollmentService.getEnrolledSections();
// const classesOnDay: EnrolledSection[] = [];
// for (let i = 0; i < enrolledSections.length; i++) {
//   if (this.containsDay(enrolledSections[i], d)) {
//     classesOnDay.push(enrolledSections[i]);
//   }
// }
// return classesOnDay;
