import {Course} from './course';
import {Section} from './section';
import {TimeInterval} from './time-interval';
/**
 * Created by kenny on 4/21/17.
 */

export const COURSES: Course[] = [
  new Course('BW101', 'Basket Weaving 101', 'Art', null, null,
    [
      new Section('7001', 'Dr. K.Hanson', 700, 900, 'T', 40, null, this.course)
    ]),
  new Course('ART60', 'Game Art', 'Art' , null, null,
    [
      new Section('1004', 'Dr. S. Dali', 1200, 1300, 'F', 40, null, this.course)
    ]),
  new Course('VR10', 'Depth of Field Virtual Reality', 'Computer Science', null, null,
    [
      new Section('1667', 'Dr. R.Oculus', 1900, 2000, 'MW', 40, null, this.course),
      new Section('1668', 'Dr. V. HTC', 1800, 1900, 'TTh', 40, null, this.course)
    ]),
  new Course('MATH105', 'Arithmetic', 'Math' , null, null,
    [
      new Section('2004', 'Dr. A', 1500, 1610, 'MW', 40, null, this.course),
      new Section('2005', 'Dr. B', 900, 1030, 'TTh', 40, null, this.course)
    ]),
  new Course('MATH110', 'Pre-Algebra', 'Math', null, null,
    [
      new Section('3030', 'Dr. P.Ireton', 900, 1000, 'M', 40, null, this.course),
      new Section('3031', 'Dr. M.Hito', 900, 1000, 'M', 40, null, this.course)
    ]),
  new Course('MATH125', 'Algebra', 'Math', null, null,
    [
      new Section('4891', 'Dr. Snap', 1000, 1100, 'M', 40, null, this.course),
      new Section('4892', 'Dr. Crackle', 1000, 1100, 'W', 40, null, this.course),
      new Section('4893', 'Dr. Pop', 1100, 1200, 'F', 40, null, this.course)
    ]),
  new Course('MATH120', 'Geometry', 'Math', null, null,
    [
      new Section('1760', 'Dr. M.Hito', 700, 800, 'MWF', 40, null, this.course)
    ]),
  new Course('MATH260', 'Calculus 1', 'Math', null, null,
    [
      new Section('1442', 'Dr. I.Newton', 1200, 1300, 'MW', 40, null, this.course)
    ]),
  new Course('MATH265', 'Calculus 2', 'Math', null, null,
    [
      new Section('7767', 'Dr. M.Barakat', 1400, 1500, 'MW', 40, null, this.course)
    ]),
  new Course('MATH266', 'Calculus 3', 'Math', null, null,
    [
      new Section('8484', 'Dr. DeCartes', 1500, 1600, 'F', 20, null, this.course)
    ]),
  new Course('COMP380', 'Software Engineering', 'Computer Science', null, null,
    [
      new Section('9133', 'Dr. T.Wang', 1600, 1700, 'TTh', 40, null, this.course),
      new Section('9134', 'Dr. T.Wang', 1800, 1900, 'MW', 40, null, this.course)
    ]),
  new Course('COMP310', 'Automata', 'Computer Science', null, null,
    [
      new Section('2250', 'Dr. Noga', 1900, 2000, 'T', 40, null, this.course)
    ]),
  new Course('COMP256', 'Discrete Structures', 'Computer Science', null, null,
    [
      new Section('9421', 'Dr. Lorentz', 600, 700, 'TTh', 40, null, this.course)
    ]),
  new Course('COMP322', 'Operating Systems', 'Computer Science', null, null,
    [
      new Section('1908', 'Dr. S.Wirsz', 700, 800, 'M', 40, null, this.course)
    ]),
  new Course('COMP222', 'Computer Architecture', 'Computer Science', null, null,
    [
      new Section('3332', 'Dr. G.Lazik', 800, 900, 'MTh', 40, null, this.course)
    ]),
  new Course('ART80', '3D Modeling', 'Art' , null, null,
    [
      new Section('1441', 'Dr. Blender', 900, 1000, 'M', 40, null, this.course)
    ]),
  new Course('ART100', 'Photoshop', 'Art' , null, null,
    [
      new Section('1337', 'Dr. Raster', 1000, 1100, 'Sa', 40, null, this.course)
    ]),
  new Course('ART150', 'How to draw', 'Art' , null, null,
    [
      new Section('3567', 'Dr. A.Teacher', 1200, 1300, 'MW', 40, null, this.course)
    ]),
  new Course('HIST10', 'History of Mankind', 'History', null, null,
    [
      new Section('8769', 'Dr. J.Christ', 1100, 1230, 'M', 40, null, this.course),
      new Section('8770', 'Dr. R.Hubbard', 1245, 1345, 'M', 40, null, this.course)
    ]),
  new Course('HIST20', 'History of the earth', 'History', null, null,
    [
      new Section('4200', 'Dr. R. Carlson', 700, 800, 'T', 40, null, this.course),
      new Section('4201', 'Dr. D. Lister', 700, 800, 'M', 40, null, this.course)
    ]),
  new Course('HIST30', 'History of the Galaxy', 'History', null, null,
    [
      new Section('5477', 'Dr. G.Galeli', 900, 1030, 'M', 40, null, this.course),
      new Section('5478', 'Dr. N. Armstrong', 900, 1030, 'MW', 40, null, this.course)
    ]),
  new Course('HIST40', 'History of the Universe', 'History', null, null,
    [
      new Section('2035', 'Dr. S. Hawkings', 900, 1030, 'M', 40, null, this.course),
      new Section('2034', 'Dr. N. Tyson', 900, 1030, 'T', 40, null, this.course)
    ]),
  new Course('COMM100', 'Group Communication', 'Communications', null, null,
    [
      new Section('1001', 'Dr. J.Rogan', 900, 1030, 'M', 40, null, this.course)
    ]),
  new Course('COMM110', 'Interpersonal Communication', 'Communications', null, null,
    [
      new Section('3487', 'P.Holder', 1600, 1730, 'M', 40, null, this.course)
    ]),
  new Course('COMM120', 'Team dynamics', 'Communications', null, null,
    [
      new Section('3261', 'Dr. T.Pastrana', 1510, 1715, 'S', 40, null, this.course)
    ]),
  new Course('ECON120', 'Economics 1', 'Economics', null, null,
    [
      new Section('4440', 'Dr. K.Marx', 900, 1030, 'T', 40, null, this.course)
    ]),
  new Course('ECON130', 'Economics 2', 'Economics', null, null,
    [
      new Section('9071', 'Dr. A.Smith', 1710, 1930, 'MW', 40, null, this.course)
    ]),
  new Course('ECON140', 'Economics 3', 'Economics', null, null,
    [
      new Section('1111', 'Dr. M. Polo', 900, 1030, 'M', 40, null, this.course)
    ])
];

export const INITCOURSES: Course[] = [
  new Course('COMP222', 'Computer Architecture', 'Computer Science', null, null,
    [
      new Section('1441', 'Dr. X', 700, 900, 'MW', 40, null, this.course),
      new Section('1442', 'Dr. Y', 700, 900, 'TTh', 40, null, this.course),
      new Section('1443', 'Dr. Z', 700, 900, 'F', 40, null, this.course)
    ]),
  new Course('ART80', '3D Modeling', 'Art' , null, null,
    [
      new Section('7177', 'Dr. Blender', 900, 1030, 'M', 40, null, this.course),
      new Section('7178', 'Dr. X', 700, 930, 'TTh', 30, null, this.course),
      new Section('7179', 'Mr. Smith', 830, 1000, 'MWF', 40, null, this.course),
    ]),
  new Course('ART100', 'Photoshop', 'Art' , null, null,
    [
      new Section('6110', 'Dr. Raster', 715, 830, 'S', 40, null, this.course)
    ])
];
