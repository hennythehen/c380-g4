/**
 * Created by daign on 4/21/2017.
 */
export class Section {
  id: string;
  instructor: string;
  time: string;
  day: string;
  capacity: number;
  enrolled: boolean;
  constructor(
    id: string,
    instructor: string,
    time: string,
    day: string,
    capacity: number,
    enrolled: boolean
  ) {
    this.id = id;
    this.instructor = instructor;
    this.time = time;
    this.day = day;
    this.capacity = capacity;
    this.enrolled = enrolled;
  }
  getId(): string {
    return this.id;
  }
  getTime(): string {
    return this.time;
  }
  getDay(): string {
    return this.day;
  }
  getCapactiy(): number {
    return this.capacity;
  }
  isEnrolled(): boolean {
    return this.enrolled;
  }
}
