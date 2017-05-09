import {EnrollmentStatus} from './enrollment-status.enum';
import {Course} from './course';
import {TimeInterval} from './time-interval';
import {ClockTime} from './clock-time';
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
}
