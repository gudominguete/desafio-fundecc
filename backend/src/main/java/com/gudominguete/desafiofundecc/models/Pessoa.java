package com.gudominguete.desafiofundecc.models;

import jakarta.persistence.Column;
import jakarta.persistence.MappedSuperclass;

import java.time.LocalDate;
import java.util.Date;
@MappedSuperclass
abstract class Pessoa {
     @Column(name = "nome")
     private String nome;
     @Column
     private String cpf;
     @Column
     private LocalDate dataNascimento;
     @Column
     private String sexo;

     public String getNome() {
          return nome;
     }

     public void setNome(String nome) {
          this.nome = nome;
     }

     public String getCpf() {
          return cpf;
     }

     public void setCpf(String cpf) {
          this.cpf = cpf;
     }

     public LocalDate getDataNascimento() {
          return dataNascimento;
     }

     public void setDataNascimento(LocalDate dataNascimento) {
          this.dataNascimento = dataNascimento;
     }

     public String getSexo() {
          return sexo;
     }

     public void setSexo(String sexo) {
          this.sexo = sexo;
     }
}

