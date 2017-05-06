import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Course} from '../model/course';
import {EnrollmentService} from '../services/enrollment.service';

@Component({
  selector: 'app-search-row',
  template: `
  <div class="search-row">
    <div class="heading">
      <h4 class="heading-row">
        <span class="course-title">{{course.title}}</span>
        <span class="course-name">{{course.name}}</span>
      </h4>
      <button
        class="pin"
        (click)="pin(course)"
      >Pin</button>
    </div>
    <p class="description">{{course.description}}</p>
  </div>
  `
})
export class SearchRowComponent {
  @Input() course: Course;
  @Output() pinEvent: EventEmitter<any> = new EventEmitter<any>();
  constructor(private enrollmentService: EnrollmentService) { }
  pin(course: Course) {
    this.pinEvent.emit(course);
  }
}
