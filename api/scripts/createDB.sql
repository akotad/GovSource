drop database if exists sourcedb;
create database sourcedb;

\c sourcedb

drop table if exists senators cascade;
create table senators (
    id serial primary key,
    email varchar(100),
    firstName varchar(20),
    lastName varchar(20),
    phoneNumb varchar(11),
    party varchar(50),
    age integer,
    class varchar(3),
    
)