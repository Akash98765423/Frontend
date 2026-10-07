
CREATE DATABASE companiesdatabase;

USE companydb;

CREATE TABLE employees (
    empid INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(50),
    department VARCHAR(50),
    salary DECIMAL(10,2)
);

INSERT INTO employees (name, department, salary) VALUES
('Akash', 'IT', 40000),
('Vicky', 'IT', 50000),
('Bharathi', 'HR', 35000),
('Tamil', 'HR', 45000),
('Arun', 'Finance', 60000),
('Kumar', 'Finance', 55000),
('Priya', 'IT', 70000),
('Divya', 'Sales', 30000);

SELECT * FROM employees;

SELECT *
FROM employees
WHERE salary > (
    SELECT AVG(salary)
    FROM employees
);

SELECT *
FROM employees
WHERE salary = (
    SELECT MAX(salary)
    FROM employees
);

SELECT *
FROM employees
WHERE salary = (
    SELECT MIN(salary)
    FROM employees
);

SELECT *
FROM employees
WHERE salary > (
    SELECT AVG(salary)
    FROM employees
    WHERE department = 'IT'
);

SELECT *
FROM employees
WHERE department IN (
    SELECT department
    FROM employees
    WHERE department IN ('IT', 'HR')
);

SELECT *
FROM employees
WHERE department NOT IN (
    SELECT department
    FROM employees
    WHERE department = 'HR'
);

SELECT DISTINCT e.department
FROM employees e
WHERE EXISTS (
    SELECT 1
    FROM employees e2
    WHERE e2.department = e.department
);

CREATE TABLE departments (
    department_id INT PRIMARY KEY AUTO_INCREMENT,
    department_name VARCHAR(50)
);

INSERT INTO departments (department_name) VALUES
('IT'),
('HR'),
('Finance'),
('Sales'),
('Marketing');

SELECT *
FROM departments d
WHERE NOT EXISTS (
    SELECT 1
    FROM employees e
    WHERE e.department = d.department_name
);

SELECT *
FROM employees
WHERE salary < (
    SELECT MAX(salary)
    FROM employees
);

SELECT *
FROM employees e1
WHERE salary > (
    SELECT AVG(e2.salary)
    FROM employees e2
    WHERE e2.department = e1.department
);