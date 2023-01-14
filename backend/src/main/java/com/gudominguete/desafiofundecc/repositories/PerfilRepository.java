package com.gudominguete.desafiofundecc.repositories;

import com.gudominguete.desafiofundecc.models.Cargo;
import com.gudominguete.desafiofundecc.models.Perfil;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface PerfilRepository extends CrudRepository<Perfil, Integer> {
    List<Perfil> findByOrderByNome();

    Perfil save(Perfil cargo);

    void delete(Perfil cargo);
}
