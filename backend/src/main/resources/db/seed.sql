CREATE DATABASE fundecc;

CREATE TABLE Cargo (
    id int auto_increment primary key,
    nome varchar(255) not null unique
);

CREATE TABLE Perfil (
    id int auto_increment primary key,
    nome varchar(255) not null unique
);

CREATE TABLE Usuario(
	id int auto_increment primary key,
    nome varchar(255) not null,
    cpf varchar(11) not null unique,
    data_nascimento date,
    sexo varchar(1),
    cargo_id int,
    FOREIGN KEY (cargo_id) REFERENCES Cargo(id)
);

CREATE TABLE rel_usuario_perfil(
	id int auto_increment primary key,
	usuario_id int not null,
	perfil_id int not null,
    FOREIGN KEY (usuario_id) REFERENCES Usuario(id),
    FOREIGN KEY (perfil_id) REFERENCES Perfil(id)
);