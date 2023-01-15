import { Cargo } from "../cargos/cargo";
import { Perfil } from "../perfil/perfil";

export class Usuario {
    id: number;
    nome: string;
    cpf: string;
    sexo: string;
    dataNascimento: Date | null;
    cargo: Cargo | null;
    perfis: Perfil[];

    constructor(){
        this.id = 0;
        this.nome = "";
        this.cpf = "";
        this.sexo = "";
        this.dataNascimento = null;
        this.cargo = null;
        this.perfis = [];
    }
}
