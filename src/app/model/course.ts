/**
 * Created by kenny on 4/21/17.
 */
import { Section } from './section';
export class Course {
  name: string;
  title: string;
  department: string;
  description: string;
  coursePreReqs: Course[];
  concurrentLab: Course;
  courseSections: Section[];
  constructor(name: string, title: string, department: string, coursePreReqs: Course[], concurrentLab: Course, courseSections: Section[]) {
    this.name = name;
    this.title = title;
    this.department = department;
    this.coursePreReqs = coursePreReqs;
    this.concurrentLab = concurrentLab;
    this.courseSections = courseSections;
  }
  getName(): string {
    return this.name;
  }
  getTitle(): string {
    return this.title;
  }
  getDepartment(): string {
    return this.department;
  }
  getPreReqCourses(): Course[] {
    return this.coursePreReqs;
  }
  getConcurrentLab(): Course {
    return this.concurrentLab;
  }
  hasConcurrentLab(): boolean {
    if (this.concurrentLab !== null) {
      return true;
    } else {
      return false;
    }
  }
  getCourseSections(): Section[] {
    return this.courseSections;
  }
}
