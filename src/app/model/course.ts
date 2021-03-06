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
  constructor(name: string,
              title: string,
              department: string,
              coursePreReqs: Course[],
              concurrentLab: Course,
              courseSections: Section[]) {
    this.name = name;
    this.title = title;
    this.department = department;
    this.coursePreReqs = coursePreReqs;
    this.concurrentLab = concurrentLab;
    this.courseSections = courseSections;
  }
}
