import {Component, OnInit} from '@angular/core';
import {Course} from '../model/course';
import {CourseService} from '../services/course.service';
import {SearchService} from '../services/search.service';
import {EnrollmentService} from '../services/enrollment.service';
import {ScheduleService} from '../services/schedule.service';


@Component({
  selector: 'app-search-view',
  providers: [CourseService, SearchService, EnrollmentService, ScheduleService],
  template: `    
    <div class="filter-list">
      <ul>
        <li *ngFor="let dept of departments"
            class="nav-item"
        >
          <span
            (click)="selectFilter(dept)"
            (click)="toggleActive(dept)"
            [ngClass]="{active: dept === activeFilter}"
            class="nav-link"
          >{{dept}}</span>
        </li>
      </ul>
    </div>
    <div class="search-results">
      <app-search-row
        *ngFor="let filteredCourse of filteredArr"
        [course]="filteredCourse"
        (togglePinEvent)="onPinToggle($event)">
      </app-search-row>
    </div>
  `,
  styleUrls: ['search-view.component.scss']
})
export class SearchViewComponent implements OnInit {
  departments: String[];
  filteredArr: Course[];
  private activeFilter: string;
  constructor(private searchService: SearchService, private courseService: CourseService) {}
  ngOnInit(): void {
    this.departments = this.searchService.getDepartments();
  }
  selectFilter(dept: string): void {
    this.filteredArr = this.searchService.filterDepartments(dept);
  }
  onPinToggle(course: Course) {
    this.courseService.pinToggle(course);
  }
  private toggleActive(dept: string) {
    if (this.activeFilter === dept) {
      return;
    }
    if (this.activeFilter !== dept) {
      this.activeFilter = dept;
    } else {
      this.activeFilter = '';
    }
  }
}
