package com.gudominguete.desafiofundecc.services;

import com.gudominguete.desafiofundecc.models.Perfil;
import com.gudominguete.desafiofundecc.repositories.PerfilRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PerfilService {
    @Autowired
    private PerfilRepository perfilRepository;

    public List<Perfil> getAllPerfis(){
        return this.perfilRepository.findByOrderByNome();
    }

    public Perfil salvarPerfil(Perfil perfil){
        return this.perfilRepository.save(perfil);
    }

    public void deletarPerfil(Integer perfilId){
        Perfil perfil = this.perfilRepository.findById(perfilId).get();
        this.perfilRepository.delete(perfil);
    }
}
