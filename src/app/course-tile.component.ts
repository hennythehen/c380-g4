/**
 * Created by kenny on 4/21/17.
 */

import {Component, Input} from '@angular/core';
import {Course} from './course';

@Component({
  selector: 'app-course-tile',
  template: `
    <div class="tile">
      <div class="heading">
        <div class="course-code">{{course.getName()}}</div>
        <div class="course-title">{{course.getTitle()}}</div>
      </div>
      <div class="content">
        <div class="content-section">
          <table class="section-table">
            <tr>
              <th>Section#</th>
              <th>Instructor</th>
              <th>Days</th>
              <th>Time</th>
            </tr>
            <tr *ngFor="let section of course.getCourseSections()">
              <td>{{section.id()}}</td>
              <td>{{section.instructor}}</td>
              <td>{{section.day}}</td>
              <td>{{section.time}}</td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .tile {
      float: left;
      width: 250px;
      height: 250px;
      background-color: #fff;
      margin: 10px;
      padding: 10px 10px 10px 10px;
      box-shadow: 6px 6px 20px #999;
    }
    .section-table {
      width: 100%;
      font-weight: lighter;
    }
    
    .heading {
      margin-bottom: 10px;
    }
    .course-code {
      font-size: 1.35em;
    }
    .course-title {
      font-size: 1em;
    }
  `]
})
export class CourseTileComponent {
  @Input() course: Course;
}
