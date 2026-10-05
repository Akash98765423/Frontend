create database governmentoffice;

use governmentoffice;

create table govOfficers(

staffid int primary key auto_increment,
staffname varchar(20),
staffdepartment varchar(20),
staffposition varchar(20),
staffsalary decimal(10,2),
staffphone varchar(20)
);

insert into govOfficers (staffname,staffdepartment,staffposition,staffsalary,staffphone) values         
('Akash','police','inspector',45000.00,'7395974717'),
('Vicky','doctor','Heart',60000.00,'6374541873'),
('Tamil','teacher','social',50000.00,'9003275157'),
('Bharathi','CM','pplleader',90000.00,'9790726518');




