import { Component } from '@angular/core';
import {CourseService} from './course.service';

@Component({
  selector: 'my-app',
  template: `<enrollment-view></enrollment-view>`,
  providers: [CourseService]
})
export class AppComponent  { name = 'Angular'; }
