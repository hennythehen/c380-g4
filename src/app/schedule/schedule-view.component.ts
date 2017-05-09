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
  styleUrls: ['schedule-view.component.scss']
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
  private dropSection(es: EnrolledSection) {
    if (this.enrollmentService.dropEnrolledSection(es)) {
      ScheduleService.schedule.dropSection(es);
    }
  }
}
