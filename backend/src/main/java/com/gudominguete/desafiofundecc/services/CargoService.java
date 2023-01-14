package com.gudominguete.desafiofundecc.services;

import com.gudominguete.desafiofundecc.models.Cargo;
import com.gudominguete.desafiofundecc.repositories.CargoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CargoService {

    @Autowired
    private CargoRepository cargoRepository;

    public List<Cargo> getAllCargos(){
        return this.cargoRepository.findByOrderByNome();
    }

    public Cargo salvarCargo(Cargo cargo){
        return this.cargoRepository.save(cargo);
    }

    public void deletarCargo(Integer cargoId){
        Cargo cargo = this.cargoRepository.findById(cargoId).get();
        this.cargoRepository.delete(cargo);
    }
}
