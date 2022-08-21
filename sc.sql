drop 
  table Teacher;
 
CREATE TABLE Teacher (
  Teacher_ID INT UNIQUE, 
  Teacher_Name VARCHAR(255), 
  email VARCHAR(255), 
  phone INT, 
  address VARCHAR(32), 
  PRIMARY KEY(Teacher_ID)
);
INSERT INTO Teacher 
VALUES 
  (
    1, 'Radi Jarra', 'radi@hotmail.com', 
    0503987654, 'jerusalem'
  );
INSERT INTO Teacher 
VALUES 
  (
    2, 'Mustafa Jarra', 'mustafa@hotmail.com', 
    0500000054, 'ramallah'
  );
INSERT INTO Teacher 
VALUES 
  (
    3, 'Hani Mohammed', 'hani@hotmail.com', 
    0503333344, 'aqabah'
  );
INSERT INTO Teacher 
VALUES 
  (
    4, 'Aziz Qaroush', 'aziz@hotmail.com', 
    0504444444, 'abu goush'
  );
  
  
  
-- ALTER TABLE Course
-- ADD CONSTRAINT Course_ID UNIQUE (Course_ID);
drop 
  table Teacher;
CREATE TABLE subject(
  subject_ID INT UNIQUE, 
  subject_Name VARCHAR(255), 
  PRIMARY KEY(subject_ID)
);
INSERT INTO subject 
VALUES 
  (1, 'English');
INSERT INTO subject 
VALUES 
  (2, 'Science');
INSERT INTO subject 
VALUES 
  (3, 'Arabic');
INSERT INTO subject 
VALUES 
  (4, 'Math');
-- Many to Many realation between the teacher and the course table
DROP 
  table Classes;
drop 
  table teacher;
  
  
CREATE TABLE Classes(
  -- 1 to m relation between the classes and the teacher
  name VARCHAR(32) UNIQUE PRIMARY KEY, 
  subject_id INT, 
  teacher_id INT, 
  date_from DATE, 
  date_to DATE, 
  CONSTRAINT subject_FK FOREIGN KEY(subject_id) REFERENCES Subject(subject_ID) ON DELETE CASCADE ON UPDATE CASCADE, 
  CONSTRAINT teacher_FK FOREIGN KEY(teacher_id) REFERENCES Teacher(Teacher_ID) ON DELETE CASCADE ON UPDATE CASCADE
);

SELECT * from classes;
INSERT INTO Classes 
VALUES 
  (
    'Masri304', 1, 4, '2022-3-01', '2022-7-01'
  );
INSERT INTO Classes 
VALUES 
  (
    'Masri201', 2, 3, '2022-3-01', '2022-7-01'
  );
INSERT INTO Classes 
VALUES 
  (
    'Shaheen309', 3, 2, '2022-2-01', '2022-6-01'
  );
INSERT INTO Classes 
VALUES 
  (
    'Masri109', 4, 1, '2022-3-01', '2022-7-01'
  );
select 
  * 
from 
  teacher;
  
  
DELETE FROM 
  teacherAssignedClass 
where 
  teacherAssignedClass.teacher_id = 3;
  
  
-- Many to Many realation between the teacher  and  the classes  
-- I need to implement routes betweent the teacher and the class.
CREATE TABLE teacherAssignedClass(
  Teacher_ID INT, 
  Class_ID varchar(32), 
  -- constraints are used to specify rules for the data in a table
  CONSTRAINT Teacher_Course_PK PRIMARY KEY (Class_ID), 
  CONSTRAINT Class_FK FOREIGN KEY (Class_ID) REFERENCES classes(name) ON DELETE CASCADE, 
  FOREIGN KEY (Teacher_ID) REFERENCES Teacher(Teacher_ID) ON DELETE CASCADE ON UPDATE CASCADE
);
drop table teacherAssignedClass;

INSERT INTO teacherAssignedClass 
VALUES 
  (4, 'Masri304');
INSERT INTO teacherAssignedClass 
VALUES 
  (3, 'Masri201');
INSERT INTO teacherAssignedClass 
VALUES 
  (1, 'Masri109');
  
SELECT * FROM teacher;

SELECT 
  classes.teacher_id, 
  classes.class_name, 
  classes.date_from, 
  classes.date_to, 
  subject.subject_name, 
  subject.subject_ID 
FROM 
  teacherAssignedClass, 
  classes 
  INNER JOIN subject ON subject.subject_ID = classes.subject_id 
WHERE 
  teacherAssignedClass.teacher_id = classes.teacher_id 
  AND teacherAssignedClass.Class_ID = classes.Class_Name;
  
SELECT * FROM Student;
--Teacher,CourseTakePlaceInClass,Classes,Student,teacherAssignedCourse,Subject;
drop 
  table Student;
  
CREATE TABLE Student(
  Student_ID INT UNIQUE, 
  Student_Name VARCHAR(255), 
  Phone INT, 
  gender char, 
  DOB DATE, 
  PRIMARY KEY(Student_ID)
);

INSERT INTO Student 
VALUES 
  (
    118, 'Munther Anati', 0527898754, 
    'M', '2000-4-14'
  );
INSERT INTO Student 
VALUES 
  (
    117, 'Yasmin Shadi', 0873457385, 'F', 
    '2001-8-28'
  );
INSERT INTO Student 
VALUES 
  (
    112, 'Thaer Siam', 0589878903, 'M', 
    '2002-3-03'
  );
INSERT INTO Student 
VALUES 
  (
    113, 'Abu Nasser', 0546783745, 'M', 
    '2003-4-19'
  );
select 
  * 
fROM 
  classes 
drop 
  table Homeworks;
CREATE TABLE Homeworks(
  homework_id INT PRIMARY KEY, 
  student_id INT, 
  grade FLOAT, 
  fromG INT default 100, 
  CONSTRAINT student_FK FOREIGN KEY (student_id) REFERENCES Student(Student_ID) ON DELETE CASCADE ON UPDATE CASCADE
);
SELECT 
  * 
FROM 
  homeworks;
INSERT INTO Homeworks 
VALUES 
  (1, 118, 90);
INSERT INTO Homeworks 
VALUES 
  (2, 117, 98);
INSERT INTO Homeworks 
VALUES 
  (3, 112, 80);
INSERT INTO Homeworks 
VALUES 
  (4, 113, 70);
CREATE TABLE student_classes(
  -- Many to Many relation between the student and the classes
  student_id INT, 
  name varchar(255), 
  date_from DATE, 
  date_to DATE, 
  PRIMARY KEY(student_id, name, date_from), 
  CONSTRAINT class_FK FOREIGN KEY(name) REFERENCES Classes(name) ON DELETE CASCADE ON UPDATE CASCADE, 
  CONSTRAINT student_FK FOREIGN KEY(student_id) REFERENCES student(student_id) ON DELETE CASCADE ON UPDATE CASCADE
);
DROP 
  TABlE student_classes;
SELECT 
  * 
FROM 
  student_classes;
INSERT INTO student_classes 
VALUES 
  (
    118, 'Masri304', '2022-3-01', '2022-7-01'
  );
INSERT INTO student_classes 
VALUES 
  (
    117, 'Masri201', '2022-3-01', '2022-7-01'
  );
INSERT INTO student_classes 
VALUES 
  (
    112, 'Shaheen309', '2022-2-01', '2022-6-01'
  );
INSERT INTO student_classes 
VALUES 
  (
    113, 'Masri109', '2022-3-01', '2022-7-01'
  );
SELECT 
  * 
FROM 
  teacherassignedclass 
SELECT 
  * 
FROM 
  teacher 
SELECT 
  * 
FROM 
  student_classes 
where 
  student_id = 117;
DELETE student_classes 
where 
  student 
SELECT 
  * 
FROM 
  student_classes, 
  classes 
where 
  student_classes.name = classes.name;
-- Show all student with assigned courses.--
SELECT 
  Student.Student_id, 
  Student.Student_Name, 
  Student.Phone, 
  Student.gender, 
  Student.DOB, 
  student_classes.name, 
  Classes.subject_id, 
  subject.subject_name 
FROM 
  student 
  INNER JOIN student_classes ON Student.Student_id = student_classes.student_id 
  INNER JOIN Classes ON Classes.name = student_classes.name 
  INNER JOIN subject ON subject.subject_id = Classes.subject_id;
SELECT 
  * 
FROM 
  subject -- Show all the classes with their subject.
SELECT 
  classes.teacher_id, 
  classes.class_name, 
  classes.date_from, 
  classes.date_to, 
  subject.subject_name, 
  subject.subject_ID 
FROM 
  teacherAssignedClass, 
  classes 
  INNER JOIN subject ON subject.subject_ID = classes.subject_id 
WHERE 
  teacherAssignedClass.teacher_id = classes.teacher_id 
  AND teacherAssignedClass.Class_ID = classes.Class_Name;
-- Find all information for each course, student, class, and Teacher
SELECT 
  DISTINCT * --  Course.Course_Name,Course.Subject_Name,Teacher.Teacher_ID, Teacher.Teacher_Name, CourseTakePlaceInClass.Class_ID,Student.Student_Name,  Student.phone, Student.dob
FROM 
  Student 
  JOIN Course ON Student.Course_ID = Course.Course_ID 
  JOIN teacherAssignedCourse ON Course.Course_ID = teacherAssignedCourse.Course_ID 
  JOIN Teacher ON teacherAssignedCourse.Teacher_ID = Teacher.Teacher_ID 
  AND teacherAssignedCourse.Course_ID = Course.Course_ID 
  JOIN CourseTakePlaceInClass ON Course.Course_ID = CourseTakePlaceInClass.Course_ID;
DELETE FROM 
  teacher 
WHERE 
  teacher_id = 1;
SELECT 
  * 
FROM 
  teacher;
DELETE FROM 
  student 
WHERE 
  Student.Student_ID = 118;
-- Find the course id for each class Room
SELECT 
  cl.Class_ID, 
  cl.Course_ID 
FROM 
  CourseTakePlaceInClass as Cl 
  INNER JOIN Classes ON Classes.Class_ID = Cl.Class_ID;
-- Find the class Room for each student with assigned course--
SELECT 
  * 
FROM 
  Student, 
  Course 
  INNER JOIN CourseTakePlaceInClass ON Course.Course_ID = CourseTakePlaceInClass.Course_ID 
WHERE 
  Student.Course_ID = Course.Course_ID;
DELETE FROM 
  teacher 
  INNER JOIN teacherassignedclass on teacherassignedclass.teacher_id = '2' 
WHERE
  teacher_id = '2';
  
  
  SELECT * FROM student_classes;
  
