/**
 * Created by daign on 5/3/2017.
 */
import { Injectable } from '@angular/core';
import { DEPARTMENTS } from '../model/mock-departments';
import { Course } from '../model/course';
import { COURSES } from '../model/mock-courses';

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
    return this.catalog.filter((c) => c.department === this.filter);
  }
}
