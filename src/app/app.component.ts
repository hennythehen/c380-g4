import { Component } from '@angular/core';
import { CourseService } from './course.service';

@Component({
  selector: 'app-root',
  template: `
    <h1>{{name}}</h1>
    <ul>
      <li><a routerLink ="/app-enrollment-view">Enrollment</a></li>
      <li><a routerLink ="/app-search-view">Search</a></li>
    </ul>
    <router-outlet></router-outlet>
  `,
  providers: [CourseService],
  styleUrls: ['./app.component.css']
})
export class AppComponent  { name = 'UNIVERSITY ENROLLMENT SYSTEM'; }
