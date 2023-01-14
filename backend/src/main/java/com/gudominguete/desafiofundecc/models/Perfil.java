package com.gudominguete.desafiofundecc.models;

import jakarta.persistence.*;

@Entity
@Table(name="perfil")
public class Perfil {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column
    private String nome;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }
}
