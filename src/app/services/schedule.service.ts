import {Injectable} from '@angular/core';
import {Course} from '../model/course';
import {DayOfWeek} from '../model/day-of-week.enum';
import {Section} from '../model/section';

@Injectable()
export class ScheduleService {

  parseCourseDays(sect: Section): DayOfWeek[] {
    let days: DayOfWeek[];
    for (let i = 0; i < sect.day.length; i++) {
      const c = sect[i];
      switch (c) {
        case 'M':
          days.push(DayOfWeek.Mon);
          break;
        case 'T':
          if (sect.day[i + 1] === 'h') {
            days.push(DayOfWeek.Thu);
          } else {
            days.push(DayOfWeek.Tue);
          }
          break;
        case 'W':
          days.push(DayOfWeek.Wed);
          break;
        case 'F':
          days.push(DayOfWeek.Fri);
          break;
        case 'S':
          if (sect.day[i + 1] === 'a') {
            days.push(DayOfWeek.Sat);
          } else {
            days.push(DayOfWeek.Sun);
          }
      }
    }
    return days;
  }
  dayToCourseMap(sections: Section[]) {

  }
}
