/**
 * Created by kenny on 4/21/17.
 */

import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Course} from '../model/course';

@Component({
  selector: 'app-course-tile',
  templateUrl: 'course-tile.component.html',
  styleUrls: ['course-tile.component.css']

})
export class CourseTileComponent {
  @Input() course: Course;
  @Output() unpinEvent: EventEmitter<any> =  new EventEmitter<any>();
  showSections: boolean;
  showSectionsToggle() {
    if (this.showSections) {
      this.showSections = false;
    } else {
      this.showSections = true;
    }
  }
  enrollInSection(sectionId: number) {

    alert('attempting to enroll in section ' + sectionId); //TODO write service
  }
  unpin(course: Course) {
    this.unpinEvent.emit(course);
  }

}
