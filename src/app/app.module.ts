import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { EnrollmentViewComponent } from './enrollment/enrollment-view.component';
import { SearchViewComponent } from './search/search-view.component';
import { CourseTileComponent } from './enrollment/course-tile.component';
import {SearchRowComponent} from 'app/search/search-row.component';
import {ScheduleViewComponent} from './schedule/schedule-view.component';

@NgModule({
  imports:      [
    BrowserModule,
    RouterModule.forRoot([
      {
        path: 'app-enrollment-view',
        component: EnrollmentViewComponent
      },
      {
        path: 'app-search-view',
        component: SearchViewComponent
      },
      {
        path: 'schedule',
        component: ScheduleViewComponent
      }
    ])
  ],
  declarations: [
    AppComponent,
    EnrollmentViewComponent,
    ScheduleViewComponent,
    CourseTileComponent,
    SearchViewComponent,
    SearchRowComponent,
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
