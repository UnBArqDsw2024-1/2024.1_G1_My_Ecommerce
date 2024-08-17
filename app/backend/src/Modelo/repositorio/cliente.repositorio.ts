import { PrismaClient } from "@prisma/client";
import { Cliente } from "../entidade/cliente";


// interface
export type ResultadoLogin = {
    sucesso: boolean;
    mensagem?: string;
};

export interface ClienteRepositorio {
    // cadastrar(cliente: Cliente): Promise<void>;
    logar(email: string, senha: string): Promise<ResultadoLogin>;
    listar(): Promise<Cliente[]>;
}

export class ClienteRepositorioPrisma implements ClienteRepositorio {
    private constructor(readonly prisma: PrismaClient) {}
    
    public static build(prisma: PrismaClient) {
        return new ClienteRepositorioPrisma(prisma);
    }
    
    public async listar(): Promise<Cliente[]> {
        const aClientes = await this.prisma.cliente.findMany({
            include: {
                pais: true
            }
        });
    
        const clientes: Cliente[] = aClientes.map((c) => {
            const {
                idCliente,
                nomeExibicao,
                dataNascimento,
                nome,
                email,
                senha,
                pais,
            } = c;
    
            return Cliente.with(
                idCliente,
                nomeExibicao,
                dataNascimento,
                nome,
                email,
                senha,
                pais ?? undefined
            );
        });
    
        return clientes;        
    }

    
    // public async cadastrar(cliente: Cliente): Promise<void> {
    //     try {
    //         await this.prisma.cliente.create({
    //             data: {
    //                 idCliente: cliente.idCliente,
    //                 nomeExibicao: cliente.nomeExibicao,
    //                 dataNascimento: cliente.dataNascimento,
    //                 nome: cliente.nome,
    //                 email: cliente.email,
    //                 senha: cliente.senha,
    //                 pais: cliente.pais ? { connect: { idPais: cliente.pais.idPais } } : undefined,
    //                 // paisId: cliente.pais ? cliente.pais.idPais : null,
    //             },
    //         });
    //     } catch (error) {
    //         console.error("Erro ao cadastrar cliente:", error);
    //         throw new Error("Erro ao cadastrar cliente.");
    //     }
    //     // const data = {
    //     //     idCliente: cliente.idCliente,
    //     //     nomeExibicao: cliente.nomeExibicao,
    //     //     dataNascimento: cliente.dataNascimento,
    //     //     nome: cliente.nome,
    //     //     email: cliente.email,
    //     //     senha: cliente.senha,
    //     //     pais: cliente.pais ? { connect: { idPais: cliente.pais.idPais } } : undefined,
    //     // };

    //     // await this.prisma.cliente.create({data,});
    // }

    public async logar(email: string, senha: string): Promise<ResultadoLogin> {
        const aCliente = await this.prisma.cliente.findUnique({where: { email }});
        if (!aCliente) {
            return { sucesso: false, mensagem: "Email não cadastrado" };
        } else {
            if (aCliente.senha !== senha) {
                return { sucesso: false, mensagem: "Senha inválida" };
            }
            return { sucesso: true, mensagem: "Login bem-sucedido" };
        }
    }
    
}