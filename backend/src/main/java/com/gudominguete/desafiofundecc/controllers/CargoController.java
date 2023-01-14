package com.gudominguete.desafiofundecc.controllers;

import com.gudominguete.desafiofundecc.models.Cargo;
import com.gudominguete.desafiofundecc.services.CargoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@CrossOrigin(origins = "*")
@RestController
public class CargoController {

    @Autowired
    private CargoService cargoService;

    @RequestMapping(value="/cargos", method = RequestMethod.GET)
    public @ResponseBody List<Cargo> getAllCargos(){
        return cargoService.getAllCargos();
    }

    @RequestMapping(value="/cargo", method = RequestMethod.POST)
    public @ResponseBody Cargo addCargo(@RequestBody Cargo cargo){
        return cargoService.salvarCargo(cargo);
    }

    @RequestMapping(value="/cargo/{cargoId}", method = RequestMethod.DELETE)
    public @ResponseBody void deleteCargo(@PathVariable Integer cargoId){
        cargoService.deletarCargo(cargoId);
    }

    @RequestMapping(value="/cargo", method = RequestMethod.PUT)
    public @ResponseBody Cargo atualizarCargo(@RequestBody Cargo cargo){
        return cargoService.salvarCargo(cargo);
    }
}
