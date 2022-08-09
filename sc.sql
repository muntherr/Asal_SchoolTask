drop table Teacher;


CREATE TABLE Teacher (
    Teacher_ID  INT  UNIQUE ,
    Teacher_Name VARCHAR(255),
    email VARCHAR(255),
    phone INT,
    address VARCHAR(32), 
    PRIMARY KEY(Teacher_ID)
);


INSERT INTO Teacher VALUES(1,'Radi Jarra','radi@hotmail.com', 0503987654,'jerusalem'); 
INSERT INTO Teacher VALUES(2,'Mustafa Jarra', 'mustafa@hotmail.com', 0500000054,'ramallah'); 
INSERT INTO Teacher VALUES(3,'Hani Mohammed', 'hani@hotmail.com', 0503333344,'aqabah'); 
INSERT INTO Teacher VALUES(4,'Aziz Qaroush', 'aziz@hotmail.com', 0504444444,'abu goush'); 


-- ALTER TABLE Course
-- ADD CONSTRAINT Course_ID UNIQUE (Course_ID);
drop table Teacher;

CREATE TABLE subject(
    subject_ID INT UNIQUE,
   subject_Name VARCHAR(255) ,
    PRIMARY KEY(subject_ID)
);

INSERT INTO subject VALUES(1,'English');
INSERT INTO subject VALUES(2,'Science');
INSERT INTO subject VALUES(3,'Arabic');
INSERT INTO subject VALUES(4,'Math');

-- Many to Many realation between the teacher and the course table
DROP table teacherAssignedClass;

drop table classes;
CREATE TABLE Classes( -- 1 to m relation between the classes and the teacher
    Class_name VARCHAR(32) UNIQUE PRIMARY KEY,
    subject_id INT,
    teacher_id INT,
    date_from DATETIME ,
    date_to DATETIME  , 
    CONSTRAINT subject_FK FOREIGN KEY(subject_id) REFERENCES Subject(subject_ID),
    CONSTRAINT teacher_FK FOREIGN KEY(teacher_id) REFERENCES Teacher(Teacher_ID)
    ON DELETE CASCADE
);

SELECT * from classes; 
INSERT INTO Classes VALUES('Masri304',1,4, '2022-3-01','2022-7-01'); 
INSERT INTO Classes VALUES('Masri201', 2,3, '2022-3-01','2022-7-01'); 
INSERT INTO Classes VALUES('Shaheen309',3,2, '2022-2-01','2022-6-01'); 
INSERT INTO Classes VALUES('Masri109',4,1, '2022-3-01','2022-7-01'); 



CREATE TABLE teacherAssignedClass(    
    Teacher_ID INT,
    Class_ID varchar(32),
    -- constraints are used to specify rules for the data in a table
    CONSTRAINT Teacher_Course_PK PRIMARY KEY (Teacher_ID ,Class_ID),
    CONSTRAINT Teacher_FK FOREIGN KEY (Teacher_ID) REFERENCES Teacher(Teacher_ID),
    CONSTRAINT Class_FK FOREIGN KEY (Class_ID) REFERENCES classes(Class_name)
    ON DELETE CASCADE
);



INSERT INTO teacherAssignedClass VALUES(4,'Masri304');
INSERT INTO teacherAssignedClass VALUES(3,'Masri201');
INSERT INTO teacherAssignedClass VALUES(2,'Shaheen309');
INSERT INTO teacherAssignedClass VALUES(1,'Masri109');
SELECT * FROM teacherAssignedClass;


SELECT classes.teacher_id, classes.class_name,classes.date_from, classes.date_to, subject.subject_name, subject.subject_ID
FROM teacherAssignedClass, classes
INNER JOIN subject ON subject.subject_ID = classes.subject_id 
WHERE teacherAssignedClass.teacher_id = classes.teacher_id
AND teacherAssignedClass.Class_ID = classes.Class_Name ;

SELECT * FROM  Student; --Teacher,CourseTakePlaceInClass,Classes,Student,teacherAssignedCourse,Subject;
drop table Student;

CREATE TABLE Student(
    Student_ID INT UNIQUE,
    Student_Name VARCHAR(255),
    Phone INT,
    gender char, 
    DOB DATE, 
    PRIMARY KEY(Student_ID)
);


INSERT INTO Student VALUES(118, 'Munther Anati',0527898754,'M', '2000-4-14'); 
INSERT INTO Student VALUES(117, 'Yasmin Shadi' ,0873457385,'F', '2001-8-28'); 
INSERT INTO Student VALUES(112, 'Thaer Siam'   ,0589878903,'M', '2002-3-03'); 
INSERT INTO Student VALUES(113, 'Abu Nasser'    ,0546783745,'M', '2003-4-19'); 



drop table Homeworks;
CREATE TABLE Homeworks(
    homework_id INT PRIMARY KEY, 
    student_id INT, 
    grade FLOAT,
    fromG INT default 100,
    CONSTRAINT student_FK FOREIGN KEY (student_id) REFERENCES Student(Student_ID) 
);

SELECT * FROM homeworks;

INSERT INTO Homeworks VALUES(1, 118, 90); 
INSERT INTO Homeworks VALUES(2, 117, 98); 
INSERT INTO Homeworks VALUES(3, 112, 80); 
INSERT INTO Homeworks VALUES(4, 113, 70); 

CREATE TABLE student_classes( -- Many to Many relation between the student and the classes
    student_id INT,
    Class_name varchar(255), 
    date_from DATE, 
    date_to DATE ,
    PRIMARY KEY(student_id, Class_name,date_from), 
    CONSTRAINT class_FK FOREIGN KEY( Class_name) REFERENCES Classes(Class_name),
    CONSTRAINT student_FK FOREIGN KEY(student_id) REFERENCES student(student_id)
);

INSERT INTO student_classes VALUES(118, 'Masri304','2022-3-01'  ,'2022-7-01'); 
INSERT INTO student_classes VALUES(117, 'Masri201','2022-3-01'  ,'2022-7-01'); 
INSERT INTO student_classes VALUES(112, 'Shaheen309','2022-2-01','2022-6-01'); 
INSERT INTO student_classes VALUES(113, 'Masri109','2022-3-01'  ,'2022-7-01');



SELECT * FROM student_classes;


-- Show all student with assigned courses.--
SELECT  Student.Student_id,Student.Student_Name,Student.Phone, Student.gender,Student.DOB, student_classes.Class_name,
Classes.subject_id, subject.subject_name
FROM  student
INNER JOIN student_classes ON Student.Student_id = student_classes.student_id
INNER JOIN Classes  ON Classes.Class_name = student_classes.Class_name
INNER JOIN subject  ON subject.subject_id = Classes.subject_id;

-- Show all the classes with their subject.
SELECT classes.teacher_id, classes.class_name,classes.date_from, classes.date_to, subject.subject_name, subject.subject_ID
FROM teacherAssignedClass, classes
INNER JOIN subject ON subject.subject_ID = classes.subject_id 
WHERE teacherAssignedClass.teacher_id = classes.teacher_id
AND teacherAssignedClass.Class_ID = classes.Class_Name ;


-- Find all information for each course, student, class, and Teacher
SELECT DISTINCT * --  Course.Course_Name,Course.Subject_Name,Teacher.Teacher_ID, Teacher.Teacher_Name, CourseTakePlaceInClass.Class_ID,Student.Student_Name,  Student.phone, Student.dob
FROM Student
 JOIN Course
ON Student.Course_ID = Course.Course_ID
 JOIN teacherAssignedCourse
ON Course.Course_ID =teacherAssignedCourse.Course_ID
 JOIN Teacher
ON teacherAssignedCourse.Teacher_ID = Teacher.Teacher_ID AND teacherAssignedCourse.Course_ID = Course.Course_ID
 JOIN CourseTakePlaceInClass
ON Course.Course_ID =CourseTakePlaceInClass.Course_ID
;

DELETE FROM  STUDENT WHERE Student_Name = 'Munther Anati';

SELECT * FROM Course;
DELETE FROM student WHERE Student.Student_ID = 118;

-- Find the course id for each class Room
SELECT  cl.Class_ID,cl.Course_ID
FROM CourseTakePlaceInClass
as Cl
INNER JOIN Classes
ON Classes.Class_ID =Cl.Class_ID ; 

-- Find the class Room for each student with assigned course--
SELECT * FROM Student,Course
INNER JOIN CourseTakePlaceInClass
ON Course.Course_ID = CourseTakePlaceInClass.Course_ID
WHERE Student.Course_ID =  Course.Course_ID;

