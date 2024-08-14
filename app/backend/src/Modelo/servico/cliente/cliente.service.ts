import { Pais } from "@prisma/client";

export type CadastrarSaidaDTO = {
    idCliente: string;
}

export type LogarSaidaDTO = {
    sucesso: boolean;
    mensagem?: string;
}

export type ListarSaidaDto = {
    clientes: {
        idCliente: string;
        nomeExibicao: string;
        dataNascimento: Date;
        nome: string;
        email: string;
        senha: string;
        pais?: Pais;
    }[];
}

export interface ClienteServico {
    listar(): Promise<ListarSaidaDto>;
    // cadastrar(
    //     idCliente: string,
    //     nomeExibicao: string,
    //     dataNascimento: Date,
    //     nome: string,
    //     email: string,
    //     senha: string,
    //     pais?: { idPais: number; nomePais: string } // Deve corresponder ao formato esperado
    // ): Promise<CadastrarSaidaDTO>;
    logar(email: string, senha: string): Promise<LogarSaidaDTO>
};