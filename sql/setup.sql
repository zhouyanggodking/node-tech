# several way to comment in mysql
# using --, # and /*comment*/


# create database/schema
CREATE SCHEMA IF NOT EXISTS godking; 

# DISPLAY ALL DATABASES IN MYSQL
SHOW DATABASES;

USE godking;

-- table

-- create table
CREATE TABLE IF NOT EXISTS user (
    id INT AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    age INT NULL,
    title VARCHAR(255) NULL,
    PRIMARY KEY (id)
)  ENGINE=INNODB;

-- or 

-- CREATE TABLE IF NOT EXISTS user (
--     id INT AUTO_INCREMENT PRIMARY KEY, -- auto not null constraint
--     name VARCHAR(255) NOT NULL,
--     age INT NULL,
--     title VARCHAR(255) NULL
-- )  ENGINE=INNODB


-- alter table

-- add columns
alter table user 
add column link varchar(255) null,
add column tel varchar(255) null;

-- drop columns
alter table user
drop column link,
drop column tel;

-- change columns
alter table user
change column age age bigint null;

-- rename table 
-- alter table user rename to user_n;
rename table user to user_n;
rename table user_n to user;

-- drop table
-- drop table if exists user