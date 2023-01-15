package com.gudominguete.desafiofundecc.controllers;

import com.gudominguete.desafiofundecc.models.Perfil;
import com.gudominguete.desafiofundecc.models.Usuario;
import com.gudominguete.desafiofundecc.services.UsuarioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "*")
@RestController
public class UsuarioController {

    @Autowired
    private UsuarioService usuarioService;

    @RequestMapping(value="/usuarios", method = RequestMethod.GET)
    public @ResponseBody List<Usuario> getAllUsuario(){
        return usuarioService.getAllUsuarios();
    }
    @RequestMapping(value="/usuario", method = RequestMethod.POST)
    public @ResponseBody Usuario addUsuario(@RequestBody Usuario usuario){
        return usuarioService.salvarUsuario(usuario);
    }

    @RequestMapping(value="/usuario/{usuarioId}", method = RequestMethod.DELETE)
    public @ResponseBody void deleteUsuario(@PathVariable Integer usuarioId){
        usuarioService.deleteUsuario(usuarioId);
    }
}
