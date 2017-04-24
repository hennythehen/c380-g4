import { Component } from '@angular/core';
import { CourseService } from './course.service';

@Component({
  selector: 'app-root',
  template: `
    <h1>{{name}}</h1>
    <nav>
      <a routerLink ="/app-enrollment-view">Enrollment</a>
      <a routerLink ="/app-search-view">Search</a>
    </nav>
    <router-outlet></router-outlet>
  `,
  providers: [CourseService]
})
export class AppComponent  { name = 'UNIVERSITY ENROLLMENT SYSTEM'; }
