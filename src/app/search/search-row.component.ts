import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Course} from '../model/course';
import {EnrollmentService} from '../services/enrollment.service';

@Component({
  selector: 'app-search-row',
  template: `
  <div class="search-row">
    <div class="heading">
      <h4 class="heading-row">{{course.title}}</h4>
      <h4 class="heading-row">{{course.name}}</h4>
      <button
        class="pin"
        (click)="togglePin(course)"
      >Toggle
      </button>
    </div>
    <p class="description">{{course.description}}</p>
  </div>
  `,
  styleUrls: ['search-row.component.scss']
})
export class SearchRowComponent {
  @Input() course: Course;
  @Output() togglePinEvent: EventEmitter<any> = new EventEmitter<any>();
  constructor(private enrollmentService: EnrollmentService) { }
  togglePin(course: Course) {
    this.togglePinEvent.emit(course);
  }
}
