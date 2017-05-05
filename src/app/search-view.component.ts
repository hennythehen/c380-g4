import {Component, OnInit} from '@angular/core';
import {Course} from './course';
import {CourseService} from './course.service';
import {SearchService} from './search.service';


@Component({
  selector: 'app-search-view',
  providers: [CourseService, SearchService],
  template: `
    <h3>SearchView</h3>
    <ul>
      <li *ngFor="let dept of departments"
      (click)="selectFilter(dept)">
        <span>{{dept}}</span>
      </li>
    </ul>
    <table>
      <thead>
        <th>name</th>
      </thead>
      <tbody>
        <tr *ngFor="let course of filteredArr">
          <td>{{course.getName()}}</td>
        </tr>
      </tbody>
    </table>
  `,
  styles: [`
    
  `],
})
export class SearchViewComponent implements OnInit {
  departments: String[];
  filteredArr: Course[];
  constructor(private mySearchService: SearchService) {}
  ngOnInit(): void {
    this.departments = this.mySearchService.getDepartments();
  }
  selectFilter(dept: string): void {
    this.filteredArr = this.mySearchService.filterDepartments(dept);
  }
}
