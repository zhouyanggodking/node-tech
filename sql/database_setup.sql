create schema if not exists godking;

use godking;

create table if not exists Users(
	Id int auto_increment primary key,
    UserName varchar(255) unique not null,
    Name varchar(255),
    Email varchar(255) unique not null,
    Password varchar(255) not null
) ENGINE=INNODB;

