package com.gudominguete.desafiofundecc.controllers;

import com.gudominguete.desafiofundecc.models.Perfil;
import com.gudominguete.desafiofundecc.services.PerfilService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "*")
@RestController
public class PerfilController {
    @Autowired
    private PerfilService perfilService;

    @RequestMapping(value="/perfis", method = RequestMethod.GET)
    public @ResponseBody List<Perfil> getAllPerfis(){
        return perfilService.getAllPerfis();
    }

    @RequestMapping(value="/perfil", method = RequestMethod.POST)
    public @ResponseBody Perfil addPerfil(@RequestBody Perfil perfil){
        return perfilService.salvarPerfil(perfil);
    }

    @RequestMapping(value="/perfil/{perfilId}", method = RequestMethod.DELETE)
    public @ResponseBody void deletePerfil(@PathVariable Integer perfilId){
        perfilService.deletarPerfil(perfilId);
    }

    @RequestMapping(value="/perfil", method = RequestMethod.PUT)
    public @ResponseBody Perfil atualizarPerfil(@RequestBody Perfil perfil){
        return perfilService.salvarPerfil(perfil);
    }
}
