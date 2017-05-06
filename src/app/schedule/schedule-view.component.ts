import { Component } from '@angular/core';
import {Course} from '../model/course';

@Component({
  selector: 'app-schedule-view',
  template: `
    <div class="schedule">
      <table class="schedule-table">
        <tr>
          <th></th>
          <th>Mon</th>
          <th>Tue</th>
          <th>Wed</th>
          <th>Thu</th>
          <th>Fri</th>
          <th>Sat</th>
          <th>Sun</th>
        </tr>
        <!--<tr *ngFor="let c of scheduledClasses">-->
          <!--<td></td>-->
        <!--</tr>-->
        <tr>
        </tr>
      </table>
    </div>
  `,
  styles: [``],
})
export class ScheduleViewComponent {
  // constructor(private enrollmentService: EnrollmentService) {}
  // scheduledClasses: Course[];

}
