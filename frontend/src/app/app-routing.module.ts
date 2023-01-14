import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CargosComponent } from './cargos/cargos.component';
import { PerfilComponent } from './perfil/perfil.component';

const routes: Routes = [
  {path: "cargos", component: CargosComponent},
  {path: "perfis", component: PerfilComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
