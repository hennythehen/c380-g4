import {Component, OnInit} from '@angular/core';
import {Course} from '../model/course';
import {CourseService} from '../services/course.service';
import {SearchService} from '../services/search.service';
import {EnrollmentService} from '../services/enrollment.service';


@Component({
  selector: 'app-search-view',
  providers: [CourseService, SearchService, EnrollmentService],
  template: `
    <h3>SearchView</h3>
    <div class="filter-list">
      <ul>
        <li *ngFor="let dept of departments"
        (click)="selectFilter(dept)">
          <span>{{dept}}</span>
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
  styleUrls: ['search-view.component.css']
})
export class SearchViewComponent implements OnInit {
  departments: String[];
  filteredArr: Course[];
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
}
