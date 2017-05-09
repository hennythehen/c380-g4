import {Course} from './course';
import {Section} from './section';
/**
 * Created by kenny on 4/21/17.
 */
export const COURSES: Course[] = [
  new Course('BW101', 'Basket Weaving 101', 'Art', null, null,
  [
    new Section('1', 'Dr. K.Hanson', '7:00-9:30', 'T', 40, false)
  ]),
  new Course('ART60', 'Game Art', 'Art' , null, null,
  [
    new Section('1', 'Dr. S. Dali', '12:00-3:30', 'F', 40, false)
  ]),
  new Course('VR10', 'Depth of Field Virtual Reality', 'Computer Science', null, null,
  [
    new Section('1', 'Dr. R.Oculus', '7:00-9:30', 'MW', 40, false),
    new Section('2', 'Dr. V. HTC', '6:00-9:30', 'TTh', 40, false)
  ]),
  new Course('MATH105', 'Arithmetic', 'Math' , null, null,
    [
      new Section('1', 'Dr. A', '3:10-4:10', 'MW', 40, false),
      new Section('2', 'Dr. B', '9:00-10:30', 'TTh', 40, false)
    ]),
  new Course('MATH110', 'Pre-Algebra', 'Math', null, null,
  [
    new Section('1', 'Dr. P.Ireton', '9:00-10:30', 'M', 40, false),
    new Section('2', 'Dr. M.Hito', '9:00-10:30', 'M', 40, false)
  ]),
  new Course('MATH125', 'Algebra', 'Math', null, null,
  [
    new Section('1', 'Dr. Snap', '9:00-10:30', 'M', 40, false),
    new Section('2', 'Dr. Crackle', '10:00-11:30', 'W', 40, false),
    new Section('3', 'Dr. Pop', '10:15-11:45', 'F', 40, false)
  ]),
  new Course('MATH120', 'Geometry', 'Math', null, null,
  [
    new Section('1', 'Dr. M.Hito', '7:00-8:30', 'MWF', 40, false)
  ]),
  new Course('MATH260', 'Calculus 1', 'Math', null, null,
  [
    new Section('1', 'Dr. I.Newton', '12:15-1:30', 'MW', 40, false)
  ]),
  new Course('MATH265', 'Calculus 2', 'Math', null, null,
  [
    new Section('1', 'Dr. M.Barakat', '3:00-4:10', 'MW', 40, false)
  ]),
  new Course('MATH266', 'Calculus 3', 'Math', null, null,
  [
    new Section('1', 'Dr. DeCartes', '9:00-10:30', 'M', 40, false)
  ]),
  new Course('COMP380', 'Software Engineering', 'Computer Science', null, null,
  [
    new Section('1', 'Dr. T.Wang', '11:30-1:30', 'TTh', 40, false),
    new Section('2', 'Dr. T.Wang', '9:00-10:30', 'MW', 40, false)
  ]),
  new Course('COMP310', 'Automata', 'Computer Science', null, null,
  [
    new Section('1', 'Dr. Noga', '8:00-10:30', 'T', 40, false)
  ]),
  new Course('COMP256', 'Discrete Structures', 'Computer Science', null, null,
  [
    new Section('1', 'Dr. Lorentz', '2:00-5:30', 'TTh', 40, false)
  ]),
  new Course('COMP322', 'Operating Systems', 'Computer Science', null, null,
  [
    new Section('1', 'Dr. S.Wirsz', '12:30-1:30', 'M', 40, false)
  ]),
  new Course('COMP222', 'Computer Architecture', 'Computer Science', null, null,
  [
    new Section('1', 'Dr. G.Lazik', '10:00-11:30', 'MTh', 40, false)
  ]),
  new Course('ART80', '3D Modeling', 'Art' , null, null,
    [
      new Section('1', 'Dr. Blender', '9:00-10:30', 'M', 40, false)
    ]),
  new Course('ART100', 'Photoshop', 'Art' , null, null,
    [
      new Section('1', 'Dr. Raster', '7:15-8:30', 'S', 40, false)
    ]),
  new Course('ART150', 'How to draw', 'Art' , null, null,
  [
    new Section('1', 'Dr. A.Teacher', '12:00-1:30', 'MW', 40, false)
  ]),
  new Course('HIST10', 'History of Mankind', 'History', null, null,
  [
    new Section('1', 'Dr. J.Christ', '11:00-12:30', 'M', 40, false),
    new Section('2', 'Dr. R.Hubbard', '12:45-2:30', 'M', 40, false)
  ]),
  new Course('HIST20', 'History of the earth', 'History', null, null,
  [
    new Section('1', 'Dr. R. Carlson', '9:00-10:30', 'M', 40, false),
    new Section('2', 'Dr. D. Lister', '7:00-11:30', 'M', 40, false)
  ]),
  new Course('HIST30', 'History of the Galaxy', 'History', null, null,
  [
    new Section('1', 'Dr. G.Galeli', '9:00-10:30', 'M', 40, false),
    new Section('2', 'Dr. N. Armstrong', '9:00-10:30', 'MW', 40, false)
  ]),
  new Course('HIST40', 'History of the Universe', 'History', null, null,
  [
    new Section('1', 'Dr. S. Hawkings', '9:00-10:30', 'M', 40, false),
    new Section('2', 'Dr. N. Tyson', '9:00-10:30', 'T', 40, false)
  ]),
  new Course('COMM100', 'Group Communication', 'Communications', null, null,
  [
    new Section('1', 'Dr. J.Rogan', '9:00-10:30', 'M', 40, false)
  ]),
  new Course('COMM110', 'Interpersonal Communication', 'Communications', null, null,
  [
    new Section('1', 'P.Holder', '4:00-5:30', 'M', 40, false)
  ]),
  new Course('COMM120', 'Team dynamics', 'Communications', null, null,
  [
    new Section('1', 'Dr. T.Pastrana', '3:10-5:15', 'S', 40, false)
  ]),
  new Course('ECON120', 'Economics 1', 'Economics', null, null,
    [
      new Section('1', 'Dr. K.Marx', '9:00-10:30', 'T', 40, false)
    ]),
  new Course('ECON130', 'Economics 2', 'Economics', null, null,
    [
      new Section('1', 'Dr. A.Smith', '5:10-7:30', 'MW', 40, false)
    ]),
  new Course('ECON140', 'Economics 3', 'Economics', null, null,
    [
    new Section('1', 'Dr. M. Polo', '9:00-10:30', 'M', 40, false)
    ])
];

export const INITCOURSES: Course[] = [
  new Course('COMP222', 'Computer Architecture', 'Computer Science', null, null,
    [
      new Section('1', 'Dr. X', '7:00-9:30', 'MW', 40, false),
      new Section('2', 'Dr. Y', '7:00-9:30', 'TTh', 40, false),
      new Section('3', 'Dr. Z', '7:00-9:30', 'F', 40, false)
    ]),
  new Course('ART80', '3D Modeling', 'Art' , null, null,
    [
      new Section('1', 'Dr. Blender', '9:00-10:30', 'M', 40, false)
    ]),
  new Course('ART100', 'Photoshop', 'Art' , null, null,
  [
    new Section('1', 'Dr. Raster', '7:15-8:30', 'S', 40, false)
  ])
];
