import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from './usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {


  constructor(private httpClient: HttpClient) { }

  getAllUsuarios(): Observable<Usuario[]>{
    return this.httpClient.get<Usuario[]>("http://localhost:8080/usuarios");
  }
  salvarUsuario(usuario: Usuario):Observable<Usuario>{
    return this.httpClient.post<Usuario>("http://localhost:8080/usuario", usuario);
  }
  deletarPerfil(usuario:Usuario): Observable<string> {
    return this.httpClient.delete<string>("http://localhost:8080/usuario/" + usuario.id);
  }
}
