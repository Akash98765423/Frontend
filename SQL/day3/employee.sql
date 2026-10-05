CREATE DATABASE companydb;

USE companydb;

CREATE TABLE employees (
    empid INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(50),
    age INT,
    department VARCHAR(50),
    salary DECIMAL(10,2),
    city VARCHAR(50)
);

INSERT INTO employees (name, age, department, salary, city)
VALUES
('Akash', 24, 'IT', 40000, 'Chennai'),
('Vicky', 27, 'HR', 48000, 'Madurai'),
('Bharathi', 30, 'CSE', 45000, 'Chennai'),
('Tamil', 26, 'IT', 50000, 'Salem'),
('Arun', 29, 'Finance', 35000, 'Chennai'),
('Vijay', 32, 'IT', 55000, 'Bangalore'),
('Anitha', 25, 'HR', 38000, 'Madurai'),
('Kavin', 28, 'CSE', 42000, NULL);

SELECT * FROM employees;

SELECT name, salary, city
FROM employees;

SELECT *
FROM employees
WHERE city = 'Chennai';

SELECT *
FROM employees
WHERE salary > 45000;

SELECT *
FROM employees
WHERE age < 28;

SELECT *
FROM employees
WHERE salary >= 40000;

SELECT *
FROM employees
WHERE department != 'HR';

SELECT *
FROM employees
WHERE department = 'IT'
AND city = 'Chennai';

SELECT *
FROM employees
WHERE city = 'Chennai'
OR city = 'Madurai';

SELECT *
FROM employees
WHERE salary > 40000
AND age < 30;

SELECT *
FROM employees
WHERE city IN ('Chennai', 'Madurai', 'Salem');

SELECT *
FROM employees
WHERE department NOT IN ('IT', 'HR');

SELECT *
FROM employees
WHERE city IS NULL;

SELECT *
FROM employees
WHERE city IS NOT NULL;

SELECT *
FROM employees
WHERE salary BETWEEN 35000 AND 50000;

SELECT *
FROM employees
WHERE age BETWEEN 25 AND 30
AND city = 'Chennai';

SELECT *
FROM employees
WHERE name LIKE 'A%';

SELECT *
FROM employees
WHERE name LIKE '%vi%';

SELECT DISTINCT department
FROM employees;

SELECT
    name AS employee_name,
    department AS department_name,
    salary AS monthly_salary
FROM employees;