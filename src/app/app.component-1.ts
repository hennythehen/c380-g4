import { Component } from '@angular/core';
import { CourseService } from './services/course.service';

@Component({
  selector: 'app-root',
  template: `
   
      <ul>
      <li>
        <a routerLink ="/app-enrollment-view">
          <i class="fa fa-home fa-2x"></i>
          <span class="nav-text">
                            Enrollment
                        </span>
        </a>
      </li>
        <!-- *** BOOTSTRAP *** -->
    <router-outlet></router-outlet>
   
    
  `,

  providers: [CourseService],
  styleUrls: ['./sidebar/sidebar.component.scss','./header/header.component.scss'],

})
export class AppComponent  { name = 'UNIVERSITY ENROLLMENT SYSTEM'; }
