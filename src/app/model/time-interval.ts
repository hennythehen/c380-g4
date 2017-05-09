import {ClockTime} from './clock-time';
import {ITime} from './time.interface';
/**
 * Created by kenny on 5/8/17.
 */
export class TimeInterval {
  start: ITime;
  end: ITime;
  static intervalsOverlap(inta: TimeInterval, intb: TimeInterval) {
    return inta.start.isBetween(intb.start, intb.end) ||
        inta.end.isBetween(intb.start, intb.end);
  }
  constructor(start: ITime, end: ITime) {
    this.start = start;
    this.end = end;
  }
}
