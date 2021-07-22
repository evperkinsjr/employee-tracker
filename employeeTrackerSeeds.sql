DROP DATABASE IF EXISTS employeetracker_db;

CREATE DATABASE employeetracker_db;

USE employeetracker_db;

CREATE TABLE departments (
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(30) NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE roles (
    id INT NOT NULL AUTO_INCREMENT,
    title VARCHAR(30) NOT NULL,
    salary DECIMAL(10,2) NOT NULL,
    department_id INT NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (department_id) REFERENCES departments (id)
);

CREATE TABLE employee (
    id INT NOT NULL AUTO_INCREMENT,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    role_id INT NOT NULL,
    manager_id INT NULL
    PRIMARY KEY (id),
    FOREIGN KEY (role_id) REFERENCES roles (id),
    FOREIGN KEY (manager_id) REFERENCES employee (id)
);

INSERT INTO departments (name) VALUES ("Development"), ("Marketing");

INSERT INTO roles (title, salary, department_id) VALUES ("Engineering Team Lead", 130000, 1), ("Software Engineer", 100000, 1);

INSERT INTO roles (title, salary, department_id) VALUES ("Digital Strategist", 85000, 2), ("Social Media Manager", 50000, 2);

INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ("Marissa", "Gray", 1, 1), ("James", "Frances", 2, null), ("Daniel", "Bruce", 3, 1), ("Kelly", "Davis", 4, null);