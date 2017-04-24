import {Course} from './course';
import {Section} from './section';
/**
 * Created by kenny on 4/21/17.
 */
export const COURSES: Course[] = [
  new Course('BW101', 'Basket Weaving 101', null, null, [new Section("12345", "Dr. X", "3:00-4:15", "MWF", 5, true)]),
  new Course('ART60', 'Game Art', null, null, null),
  new Course('VR10', 'Depth of Field Virtual Reality', null, null, null)
];
