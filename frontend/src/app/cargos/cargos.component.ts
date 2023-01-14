import { Component, OnInit } from '@angular/core';
import { CargosService } from './cargos.service';
import { Cargo } from './cargo';

declare var window: any;


@Component({
  selector: 'app-cargos',
  templateUrl: './cargos.component.html',
  styleUrls: ['./cargos.component.scss']
})
export class CargosComponent implements OnInit {
  cargos: Cargo[] = [];
  cargo: Cargo = new Cargo();
  cargoEdicao: Cargo = new Cargo();
  editModal: any;
  constructor(private cargosService: CargosService){}
  
  buscarCargos(){
    this.cargosService.getAllCargos().subscribe(
      (response)=>{
        this.cargos = response}
    )  
  }

  ngOnInit(): void {
    this.buscarCargos();  
    this.editModal = new window.bootstrap.Modal(
      document.getElementById('cargoModal')
    );
  }

  onSaveClick(){
    this.cargosService.salvarCargo(this.cargo).subscribe(
      () => {
        this.buscarCargos();
      }, (error) => {
        alert("Foi adicionado um cargo com um nome existente!");
      }
    )
  }

  onDeleteClick(cargo:Cargo){
    this.cargosService.deletarCargo(cargo).subscribe(
      () => {
        this.buscarCargos();
      }
    );
  }

  onUpdateClick(){
    this.cargosService.atualizarCargo(this.cargoEdicao).subscribe(
      () => {
        this.fecharModalEdicao();
        this.buscarCargos();
      }
    );
  }

  abrirModalEdicao(cargo: Cargo){
    this.cargoEdicao = cargo;
    this.editModal.show();
  }
  fecharModalEdicao(){
    this.editModal.hide();
  }
}
