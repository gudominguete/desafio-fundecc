import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cargo } from './cargo';

@Injectable({
  providedIn: 'root'
})
export class CargosService {

  constructor(private httpClient: HttpClient) { }

  getAllCargos(): Observable<Cargo[]>{
    return this.httpClient.get<Cargo[]>("http://localhost:8080/cargos");
  }
  salvarCargo(cargo: Cargo): Observable<Cargo>{
    return this.httpClient.post<Cargo>("http://localhost:8080/cargo", cargo);
  }
  deletarCargo(cargo:Cargo): Observable<string> {
    return this.httpClient.delete<string>("http://localhost:8080/cargo/" + cargo.id);
  }
  atualizarCargo(cargo:Cargo): Observable<Cargo> {
    return this.httpClient.put<Cargo>("http://localhost:8080/cargo", cargo);
  }
}
