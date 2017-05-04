import {Course} from './course';
import {Section} from './section';
/**
 * Created by kenny on 4/21/17.
 */
export const COURSES: Course[] = [
  new Course('BW101', 'Basket Weaving 101', 'Art', null, null, null),
  new Course('ART60', 'Game Art', 'Art' , null, null, null),
  new Course('VR10', 'Depth of Field Virtual Reality', 'Computer Science', null, null, null),
  new Course('MATH105', 'Arithmetic', 'Math' , null, null, null),
  new Course('MATH110', 'Pre-Algebra', 'Math', null, null, null),
  new Course('MATH125', 'Algebra', 'Math', null, null, null),
  new Course('MATH120', 'Geometry', 'Math', null, null, null),
  new Course('MATH260', 'Calculus 1', 'Math', null, null, null),
  new Course('MATH265', 'Calculus 2', 'Math', null, null, null),
  new Course('MATH266', 'Calculus 3', 'Math', null, null, null),
  new Course('COMP380', 'Software Engineering', 'Computer Science', null, null, null),
  new Course('COMP310', 'Automata', 'Computer Science', null, null, null),
  new Course('COMP256', 'Discrete Structures', 'Computer Science', null, null, null),
  new Course('COMP322', 'Operating Systems', 'Computer Science', null, null, null),
  new Course('COMP222', 'Computer Architecture', 'Computer Science', null, null, null),
  new Course('ART80', '3D Modeling', 'Art' , null, null, null),
  new Course('ART100', 'Photoshop', 'Art' , null, null, null),
  new Course('ART150', 'How to draw', 'Art' , null, null, null),
  new Course('HIST10', 'History of Mankind', 'History', null, null, null),
  new Course('HIST20', 'History of the earth', 'History', null, null, null),
  new Course('HIST30', 'History of the Galaxy', 'History', null, null, null),
  new Course('HIST40', 'History of the Universe', 'History', null, null, null),
  new Course('COMM100', 'Group Communication', 'Communications', null, null, null),
  new Course('COMM110', 'Interpersonal Communication', 'Communications', null, null, null),
  new Course('COMM120', 'Team dynamics', 'Communications', null, null, null),
  new Course('ECON120', 'Economics 1', 'Economics', null, null, null),
  new Course('ECON130', 'Economics 2', 'Economics', null, null, null),
  new Course('ECON140', 'Economics 3', 'Economics', null, null, null)
];

export const INITCOURSES: Course[] = [
  new Course('COMP222', 'Computer Architecture', 'Computer Science', null, null,
    [
      new Section('1', 'Dr. X', '7:00-9:30', 'MW', 40, false),
      new Section('2', 'Dr. X', '7:00-9:30', 'MW', 40, false),
      new Section('3', 'Dr. X', '7:00-9:30', 'MW', 40, false)
    ]),
  new Course('ART80', '3D Modeling', 'Art' , null, null, null),
  new Course('ART100', 'Photoshop', 'Art' , null, null, null)
];
