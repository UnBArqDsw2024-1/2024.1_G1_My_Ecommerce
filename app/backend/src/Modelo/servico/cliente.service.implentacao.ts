import { ClienteRepositorio } from "../repositorio/cliente.repositorio";

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
    logar(email: string, senha: string): Promise<LogarSaidaDTO>
};

export class ClienteServicoImplementacao implements ClienteServico {
    
    private constructor(private prisma: ClienteRepositorio) {}
    
    public static build(prisma: ClienteRepositorio){
        return new ClienteServicoImplementacao(prisma);
    }
    
    public async listar(): Promise<ListarSaidaDto> {
        const aClientes = await this.prisma.listar();
        // lista de produtos
        const clientes = aClientes.map((c) => {
            return {
                idCliente: c.idCliente,
                nomeExibicao: c.nomeExibicao,
                dataNascimento: c.dataNascimento,
                nome: c.nome,
                email: c.email,
                senha: c.senha,
                pais: c.pais
            };
        });
        
        const saida: ListarSaidaDto = {
            clientes, 
        };
        
        return saida;
    }
    
    public async logar(email: string, senha: string): Promise<LogarSaidaDTO> {
        const aCliente = await this.prisma.logar(email, senha);
        if (!aCliente.sucesso) {
            return { sucesso: false, mensagem: aCliente.mensagem };
        }
        return { sucesso: true, mensagem: "Login bem-sucedido" };
    }
    
}