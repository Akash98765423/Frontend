create database governmentdata;

use governmentdata;

CREATE TABLE government_office (
    staffid INT PRIMARY KEY AUTO_INCREMENT,
    staffname VARCHAR(50),
    department VARCHAR(50),
    position VARCHAR(50),
    salary DECIMAL(10,2),
    phone VARCHAR(15)
);