/**
 * Created by kenny on 4/21/17.
 */

import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Course} from '../model/course';
import {Section} from '../model/section';
import {EnrollmentStatus} from '../model/enrollment-status.enum';

@Component({
  selector: 'app-course-tile',
  templateUrl: 'course-tile.component.html',
  styleUrls: ['course-tile.component.scss']
})
export class CourseTileComponent implements OnInit {
  @Input() course: Course;
  @Output() unpinEvent: EventEmitter<any> =  new EventEmitter<any>();
  @Output() enrollEvent: EventEmitter<any> = new EventEmitter<any>();
  showSections: boolean;
  private enrolledFlag: boolean;
  ngOnInit() {
    this.enrolledInCourse(this.course);
  }
  showSectionsToggle() {
    if (this.showSections) {
      this.showSections = false;
    } else {
      this.showSections = true;
    }
  }
  enrollInSection(section: Section) {
    this.enrollEvent.emit(section);
  }
  unpin(course: Course) {
    this.unpinEvent.emit(course);
  }
  enrolledInCourse(c: Course) {
    for (let i = 0; i < c.courseSections.length; i++) {
      const es: Section = c.courseSections[i];
      if (es.status === EnrollmentStatus.Enrolled) {
        this.enrolledFlag = true;
        return;
      }
    }
    return false;
  }
}
