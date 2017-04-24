import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { EnrollmentViewComponent } from './enrollment-view.component';
import { SearchViewComponent } from './search-view.component';
import {CourseTileComponent} from './course-tile.component';

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
      }
    ])
  ],
  declarations: [
    AppComponent,
    EnrollmentViewComponent,
    SearchViewComponent,
    CourseTileComponent
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
