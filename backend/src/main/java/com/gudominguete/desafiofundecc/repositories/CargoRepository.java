package com.gudominguete.desafiofundecc.repositories;

import com.gudominguete.desafiofundecc.models.Cargo;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface CargoRepository extends CrudRepository<Cargo, Integer> {

    List<Cargo> findByOrderByNome();

    Cargo save(Cargo cargo);

    void delete(Cargo cargo);
}
