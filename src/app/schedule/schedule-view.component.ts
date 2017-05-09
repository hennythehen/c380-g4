import {Component, OnInit} from '@angular/core';
import {EnrolledSection} from '../model/enrolled-section';
import {EnrollmentService} from '../services/enrollment.service';
import {DayOfWeek} from '../model/day-of-week.enum';
import {ScheduleService} from '../services/schedule.service';
import {isNumber} from 'util';

@Component({
  selector: 'app-schedule-view',
  providers: [ScheduleService, EnrollmentService],
  templateUrl: 'schedule-view.component.html',
  styles: [`
    .schedule-view {
      width: 100%;
      overflow: hidden;
    }
    .card-schedule-wrapper {
      background: lime;
      display: flex;
      flex-direction: row;
      flex-wrap: nowrap;
    }
    .schedule-card {
      padding: 0 5px 0 5px;
      border: 1px;
      flex-grow: 1;
      background: pink;
    }
  `]
})
export class ScheduleViewComponent implements OnInit {
  cardView: boolean;
  tableView: boolean;
  enrolledSections: EnrolledSection[];
  days: string[];
  constructor(
    private scheduleService: ScheduleService,
    private enrollmentService: EnrollmentService) {
    this.days = Object.keys(DayOfWeek).filter(key => (parseInt(key, 10) >= 0));
    this.cardView = true; this.tableView = false;
  }
  ngOnInit() {
    this.getClasses();
  }
  private getClasses() {
    this.enrolledSections = this.enrollmentService.getEnrolledSections();
  }
  private getClassesForDay(d: DayOfWeek): EnrolledSection[] {
    return this.scheduleService.getClassesOnDay(d);
  }

  private setCardView() {
    this.tableView = false;
    this.cardView = true;
  }
  private setTableView() {
    this.tableView = true;
    this.cardView = false;
  }
  private getDayStrFromEnum(d: DayOfWeek): string {
    return DayOfWeek[d];
  }
}
