import { Injectable } from '@angular/core';
import { Perfil } from './perfil';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PerfilService {

  constructor(private httpClient: HttpClient) { }

  getAllPerfis(): Observable<Perfil[]>{
    return this.httpClient.get<Perfil[]>("http://localhost:8080/perfis");
  }
  salvarPerfil(perfil: Perfil): Observable<Perfil>{
    return this.httpClient.post<Perfil>("http://localhost:8080/perfil", perfil);
  }
  deletarPerfil(perfil:Perfil): Observable<string> {
    return this.httpClient.delete<string>("http://localhost:8080/perfil/" + perfil.id);
  }
  atualizarPerfil(perfil:Perfil): Observable<Perfil> {
    return this.httpClient.put<Perfil>("http://localhost:8080/perfil", perfil);
  }
}
