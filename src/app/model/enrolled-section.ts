import {Section} from './section';
import {Course} from './course';
import {EnrollmentStatus} from './enrollment-status.enum';

export class EnrolledSection {
  section: Section;
  isCourse: Course;
  status: EnrollmentStatus;
}
