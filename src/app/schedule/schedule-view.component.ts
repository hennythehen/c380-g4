import {Component, OnInit} from '@angular/core';
import {EnrolledSection} from '../model/enrolled-section';
import {EnrollmentService} from '../services/enrollment.service';
import {DayOfWeek} from '../model/day-of-week.enum';
import {ScheduleService} from '../services/schedule.service';

@Component({
  selector: 'app-schedule-view',
  providers: [ScheduleService, EnrollmentService],
  templateUrl: 'schedule-view.component.html',
})
export class ScheduleViewComponent implements OnInit {
  viewStyle: string;
  enrolledSections: EnrolledSection[];
  constructor(
    private scheduleService: ScheduleService,
    private enrollmentService: EnrollmentService) {
    this.viewStyle = 'card';
  }
  ngOnInit() {
    this.getClasses();
  }
  private getClasses() {
    this.enrolledSections = this.enrollmentService.getEnrolledSections();
  }
  private getClassesForDay(d: DayOfWeek): EnrolledSection[] {
    const classesInDay: EnrolledSection[] = this.enrolledSections.filter(
      (section) => this.containsDay(section, d)
    );
    return classesInDay;
  }
  private containsDay(section, d) {
    const days = this.scheduleService.parseCourseDays(section);
    if (days.filter((day) => day === d) !== null) {
      return true;
    } else {
      return false;
    }
  }
  private isCardStyle(): boolean {
    console.log(this.viewStyle === 'card');
    return this.viewStyle === 'card';
  }
  private isTableStyle(): boolean {
    return this.viewStyle === 'table';
  }
}
