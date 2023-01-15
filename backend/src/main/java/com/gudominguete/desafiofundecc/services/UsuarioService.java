package com.gudominguete.desafiofundecc.services;

import com.gudominguete.desafiofundecc.models.Usuario;
import com.gudominguete.desafiofundecc.repositories.UsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UsuarioService {

    @Autowired
    private UsuarioRepository usuarioRepository;

    public List<Usuario> getAllUsuarios(){
        return this.usuarioRepository.findAll();
    }

    public Usuario salvarUsuario(Usuario usuario){
        return this.usuarioRepository.save(usuario);
    }

    public void deleteUsuario(Integer usuarioId){
        Usuario usuario = this.usuarioRepository.findById(usuarioId).get();
        this.usuarioRepository.delete(usuario);
    }
}
