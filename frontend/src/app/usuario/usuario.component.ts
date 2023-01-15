import { Component, OnInit } from '@angular/core';
import { Cargo } from '../cargos/cargo';
import { CargosService } from '../cargos/cargos.service';
import { Perfil } from '../perfil/perfil';
import { PerfilService } from '../perfil/perfil.service';
import { Usuario } from './usuario';
import { UsuarioService } from './usuario.service';


declare var window: any;

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.scss']
})
export class UsuarioComponent implements OnInit {
  usuarios: Usuario[] = [];
  usuario:Usuario = new Usuario();
  cadastroModal: any;
  cargos:Cargo[] = [];
  perfis: Perfil[] = [];
  perfisSelecionados: Perfil[] = [];

  constructor(private usuarioService: UsuarioService, private cargoService:CargosService, private perfilService: PerfilService){}
  
  buscarUsuarios(){
    this.usuarioService.getAllUsuarios().subscribe(
      (response)=>{
        this.usuarios = response}
    )  
  }

  ngOnInit(): void {
    this.buscarUsuarios();  
    this.cadastroModal = new window.bootstrap.Modal(
      document.getElementById('cadastroUsuarioModal')
    );
    this.cargoService.getAllCargos().subscribe(
      (response) => this.cargos = response
    )
    this.perfilService.getAllPerfis().subscribe(
      (response) => this.perfis = response
    )
  }

  salvarUsuario(){

    this.usuario.perfis = this.perfisSelecionados;
    this.usuario.dataNascimento = new Date();
    this.usuarioService.salvarUsuario(this.usuario).subscribe(
      () => {
        this.fecharModalCadastro();
        this.buscarUsuarios();
      }
    )
  }

  setCargo(cargo:Cargo){
    this.usuario.cargo = cargo;
  }

  abrirModalCadastro(){
    this.usuario = new Usuario();
    this.perfisSelecionados = [];
    this.cadastroModal.show();
  }

  fecharModalCadastro(){
    this.cadastroModal.hide();
  }

  onCheckboxChange(event:any){
  
    if (event.target.checked) {
      const perfil = new Perfil();
      perfil.id = event.target.value;
      this.perfisSelecionados.push(perfil);
    } else {
       const index = this.perfisSelecionados.findIndex(x => x.id === event.target.value);
       this.perfisSelecionados.splice(index,1);
    }
  }

  onDeleteClick(usuario: Usuario){
    this.usuarioService.deletarPerfil(usuario).subscribe(
      () => {
        this.buscarUsuarios();
      }
    );
  }
}
