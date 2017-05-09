import { Component } from '@angular/core';
import { CourseService } from './services/course.service';


@Component({
  selector: 'app-root',
  template: `
    
    <head>


      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
      <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.0/jquery.min.js"></script>
      <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>

      
  </head>
  <body><div class="area"></div><nav class="main-menu">

    <ul>
      <li>
        <a routerLink ="/app-enrollment-view">
          <i class="fa fa-check"></i>
          <span class="nav-text">
                            Enrollment
                        </span>
        </a>
      </li>
      <li>
        <a routerLink ="/app-search-view">
          <i class="fa fa-search"></i>
          <span class="nav-text">
                            Search
                        </span>
        </a>
      </li>
      
    </ul>
    
  <!-- LOGOUT BUTTON LOWER LEFT
    <ul class="logout">
      <li>
        <a href="#">
          <i class="fa fa-power-off fa-2x"></i>
          <span class="nav-text">
                            Logout
                        </span>
        </a>
      </li>
    </ul>
    -->
  </nav>
  
  </body>
 


        <!-- *** BOOTSTRAP *** -->
    <router-outlet></router-outlet>
    
   
    
  `,

  providers: [CourseService],
  styleUrls: ['./homepage.css','./sidebar/sidebar.component.scss','./header/header.component.scss'],

})
export class AppComponent  { name = 'UNIVERSITY ENROLLMENT SYSTEM'; }
