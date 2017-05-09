/**
 * Created by kenny on 5/8/17.
 */
export interface ITime {
  isBetween(start: ITime, end: ITime): boolean;
  setHour(h: number);
  setMinutes(m: number);
  getFormattedTime(): string;
  getComparableTime(): number;
}
