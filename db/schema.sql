create database if not exists burgers_db;

use burgers_db;

create table burgers (
    id int auto_increment,
    burger_name varchar(100) not null,
    devoured boolean default false,
    primary key (id)
);