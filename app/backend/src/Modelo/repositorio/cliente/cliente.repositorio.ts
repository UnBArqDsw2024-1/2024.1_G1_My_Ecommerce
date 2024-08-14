// interface
import { Cliente } from "../../entidade/cliente";

export type ResultadoLogin = {
    sucesso: boolean;
    mensagem?: string;
};

export interface ClienteRepositorio {
    // cadastrar(cliente: Cliente): Promise<void>;
    logar(email: string, senha: string): Promise<ResultadoLogin>;
    listar(): Promise<Cliente[]>;
}