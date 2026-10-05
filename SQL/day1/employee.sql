create database employeedata;

use employeedata;

CREATE TABLE employees (
    empid INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(50),
    department VARCHAR(50),
    position VARCHAR(50),
    salary DECIMAL(10,2),
    phone VARCHAR(15)
);