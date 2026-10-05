create database productdata;

use productdata;

CREATE TABLE products (
    productid INT PRIMARY KEY AUTO_INCREMENT,
    productname VARCHAR(100),
    category VARCHAR(50),
    price DECIMAL(10,2),
    quantity INT,
    brand VARCHAR(50)
);