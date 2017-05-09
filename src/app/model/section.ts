import {EnrollmentStatus} from './enrollment-status.enum';
import {Course} from './course';
import {TimeInterval} from './time-interval';
import {ClockTime} from './clock-time';
import {DayOfWeek} from './day-of-week.enum';
/**
 * Created by daign on 4/21/2017.
 */
export class Section {
  id: string;
  instructor: string;
  timeInterval: TimeInterval;
  days: string;
  capacity: number;
  status: EnrollmentStatus;
  course: Course;
  constructor(
    id: string,
    instructor: string,
    timeStart: number,
    timeEnd: number,
    day: string,
    capacity: number,
    status: EnrollmentStatus,
    course: Course
  ) {
    this.id = id;
    this.instructor = instructor;
    this.timeInterval = new TimeInterval(new ClockTime(timeStart), new ClockTime(timeEnd));
    this.days = day;
    this.capacity = capacity;
    this.status = status;
    this.course = course;
  }
  parseCourseDays(): DayOfWeek[] {
    const days: DayOfWeek[] = [];
    let c: string;
    for (let i = 0; i < this.days.length; i += 1) {
      c = this.days.charAt(i);
      switch (c) {
        case 'M':
          days.push(DayOfWeek.Mon);
          break;
        case 'T':
          if (this.days[i + 1] === 'h') {
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
          if (this.days[i + 1] === 'a') {
            days.push(DayOfWeek.Sat);
          } else {
            days.push(DayOfWeek.Sun);
          }
          break;
      }
    }
    return days;
  }

}
