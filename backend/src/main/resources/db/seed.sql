CREATE DATABASE fundecc;

CREATE TABLE Cargo (
    id int auto_increment primary key,
    nome varchar(255) not null unique
);