import { Component } from '@angular/core';
import { CourseService } from './services/course.service';

@Component({
  selector: 'app-root',
  template: `
    <div class="wrapper">
      <div class="header-bar">
        <h1>{{appTitle}}</h1>
      </div>
      <div class="content-wrapper">
        <div class="vertical-nav">
          <div class="nav-item">
            <a routerLink = '/app-enrollment-view'>Enrollment</a>
          </div>
          <div class="nav-item">
            <a routerLink = '/app-search-view'>Catalog</a>
          </div>
          <div class="nav-item">
            <a routerLink ='/schedule'>Schedule</a>
          </div>
        </div>
        <div class="content">
          <router-outlet></router-outlet>
        </div>
      </div>
      
    </div>
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent  {
  appTitle = 'Class Enrollment System';
}
