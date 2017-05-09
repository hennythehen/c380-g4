import {Component, ViewEncapsulation} from '@angular/core';
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
            <a class="nav-link" routerLink = '/app-enrollment-view' routerLinkActive="active">Enrollment</a>
          </div>
          <div class="nav-item">
            <a class="nav-link" routerLink = '/app-search-view' routerLinkActive="active">Catalog</a>
          </div>
          <div class="nav-item">
            <a class="nav-link" routerLink ='/schedule' routerLinkActive="active"><span>Schedule</span></a>
          </div>
        </div>
        <div class="content">
          <router-outlet></router-outlet>
        </div>
      </div>
      
    </div>
  `,
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent  {
  appTitle = 'Class Enrollment System';
}
