import { Component, OnInit } from '@angular/core';
import { Perfil } from './perfil';
import { PerfilService } from './perfil.service';

declare var window: any;

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss']
})
export class PerfilComponent implements OnInit {
  perfis: Perfil[] = [];
  perfil: Perfil = new Perfil();
  perfilEdicao: Perfil = new Perfil();
  editModal: any;
  constructor(private perfilService: PerfilService){}
  
  buscarPerfis(){
    this.perfilService.getAllPerfis().subscribe(
      (response)=>{
        this.perfis = response}
    )  
  }

  ngOnInit(): void {
    this.buscarPerfis();  
    this.editModal = new window.bootstrap.Modal(
      document.getElementById('perfilModal')
    );
  }

  onSaveClick(){
    this.perfilService.salvarPerfil(this.perfil).subscribe(
      () => {
        this.buscarPerfis();
      }, (error) => {
        alert("Já existe um perfil com esse nome!");
      }
    )
  }

  onDeleteClick(perfil:Perfil){
    this.perfilService.deletarPerfil(perfil).subscribe(
      () => {
        this.buscarPerfis();
      }
    );
  }

  onUpdateClick(){
    this.perfilService.atualizarPerfil(this.perfilEdicao).subscribe(
      () => {
        this.fecharModalEdicao();
        this.buscarPerfis();
      }
    );
  }

  abrirModalEdicao(perfil: Perfil){
    this.perfilEdicao = perfil;
    this.editModal.show();
  }
  fecharModalEdicao(){
    this.editModal.hide();
  }
}
