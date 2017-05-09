/**
 * Created by kenny on 4/21/17.
 */

import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Course} from '../model/course';
import {Section} from '../model/section';

@Component({
  selector: 'app-course-tile',
  templateUrl: 'course-tile.component.html',
  styleUrls: ['course-tile.component.scss']
})
export class CourseTileComponent {
  @Input() course: Course;
  @Output() unpinEvent: EventEmitter<any> =  new EventEmitter<any>();
  @Output() enrollEvent: EventEmitter<any> = new EventEmitter<any>();
  showSections: boolean;
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
}
