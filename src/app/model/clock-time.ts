import {ITime} from './time.interface';
export class ClockTime implements ITime {
  private fourDigitTime: number;
  constructor(fourDigit: number) {
    this.fourDigitTime = fourDigit;
  }
  isBetween(start: ITime, end: ITime): boolean {
    return (this.getComparableTime() > start.getComparableTime() && this.getComparableTime() < end.getComparableTime());
  }
  setHour(h: number) {
    const minutes = this.fourDigitTime % 100;
    this.fourDigitTime = (h * 100) + minutes;
  }
  setMinutes(m: number) {
    const hours = this.getHours();
    this.fourDigitTime = hours * 100 + m;
  }
  getComparableTime(): number {
    return this.fourDigitTime;
  }
  getFormattedTime(): string {
    const str = this.getHours() + ':' + ('0' + (this.fourDigitTime % 100)).slice(-2) + this.getAmPm();
    return str;
  }
  private getHours() {
    return ((this.fourDigitTime - (this.fourDigitTime % 100)) / 100) % 12;
  }
  private getAmPm(): string {
    return ((this.fourDigitTime - (this.fourDigitTime % 100)) / 100) >= 12  ? 'pm' : 'am';
  }
}
