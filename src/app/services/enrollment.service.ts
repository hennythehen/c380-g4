import {Injectable} from '@angular/core';
import {EnrollmentStatus} from '../model/enrollment-status.enum';
import {EnrolledSection} from '../model/enrolled-section';
import {Course} from '../model/course';

@Injectable()
export class EnrollmentService {

  // getClassesWithStatus(status: EnrollmentStatus) {
  //   switch (status) {
  //     case EnrollmentStatus.Enrolled: {
  //       return this.getEnrolledClasses();
  //     }
  //     case EnrollmentStatus.Waitlisted: {
  //       return this.getWaitlistedClasses();
  //     }
  //   }
  // }

}
