package com.gudominguete.desafiofundecc.repositories;

import com.gudominguete.desafiofundecc.models.Perfil;
import com.gudominguete.desafiofundecc.models.Usuario;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface UsuarioRepository extends CrudRepository<Usuario, Integer> {
    List<Usuario> findAll();

    Usuario save(Usuario usuario);


}
