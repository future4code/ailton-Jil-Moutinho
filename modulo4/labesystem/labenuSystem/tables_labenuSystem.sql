USE `ailton-mariana-silva`;
SET SQL_SAFE_UPDATES = 0;

CREATE TABLE
    classes (
        id INT PRIMARY KEY AUTO_INCREMENT,
        class_name VARCHAR(255),
        module INT DEFAULT 0
    );

SELECT * FROM classes;

CREATE TABLE
    student (
        id INT PRIMARY KEY AUTO_INCREMENT,
        student_name VARCHAR(255) NOT NULL UNIQUE,
        student_email VARCHAR(255) NOT NULL UNIQUE,
        birth_date DATE NOT NULL,
        class_id INT NOT NULL,
        FOREIGN KEY (class_id) REFERENCES classes(id)
    );

SELECT * FROM student;

CREATE TABLE
    hobby (
        id INT PRIMARY KEY AUTO_INCREMENT,
        hobby_name VARCHAR (255) NOT NULL UNIQUE
    );
SELECT * FROM hobby;

CREATE TABLE
    student_hobby (
        id INT PRIMARY KEY AUTO_INCREMENT,
        hobby_name VARCHAR(255) NOT NULL,
        student_name VARCHAR(255) NOT NULL,
        FOREIGN KEY (hobby_name) REFERENCES hobby(hobby_name),
        FOREIGN KEY (student_name) REFERENCES student(student_name)
    );
    
    SELECT * FROM student_hobby;

CREATE TABLE
    teacher(
        teacher_id INT PRIMARY KEY,
        teacher_name VARCHAR(67) NOT NULL UNIQUE,
        teacher_email VARCHAR(67) UNIQUE,
        birth_date DATE NOT NULL,
        class_id INT NOT NULL,
        FOREIGN KEY (class_id) REFERENCES classes(id)
    );

SELECT * FROM teacher;

CREATE TABLE
    expertise (
        id INT PRIMARY KEY AUTO_INCREMENT,
        expertise_name VARCHAR(255) NOT NULL UNIQUE
    );

INSERT INTO expertise(expertise_name) values ("JS");

INSERT INTO expertise(expertise_name) values ("CSS");

INSERT INTO expertise(expertise_name) values ("React");

INSERT INTO expertise(expertise_name) values ("Typescript");

INSERT INTO
    expertise(expertise_name)
values (
        "POO (Programação Orientada a Objetos)"
    );

SELECT * FROM expertise;

CREATE TABLE
    teacher_expertise (
        id INT PRIMARY KEY AUTO_INCREMENT,
        teacher_name VARCHAR(255) NOT NULL,
        expertise_name VARCHAR(255) NOT NULL,
        FOREIGN KEY (teacher_name) REFERENCES teacher(teacher_name),
        FOREIGN KEY (expertise_name) REFERENCES expertise(expertise_name)
    );
    
SELECT * FROM teacher_expertise;