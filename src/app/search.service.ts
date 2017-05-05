/**
 * Created by daign on 5/3/2017.
 */
import { Injectable } from '@angular/core';
import { DEPARTMENTS } from './mock-departments';
import { Course } from './course';
import { COURSES } from './mock-courses';

@Injectable()
export class SearchService {
  catalog: Course[] = COURSES;
  filter: string;
  filtered: Course[];
  getDepartments(): String[] {
    return DEPARTMENTS;
  }
  filterDepartments(dept: string): Course[] {
    this.filter = dept;
    this.filtered = this.catalog.filter(this.compareDepartment, this);
    return this.filtered;
  }
  compareDepartment(course, that) {
    return(course.department === that.filter);
  }
}
