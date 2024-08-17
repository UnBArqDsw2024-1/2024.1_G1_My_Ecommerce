import { PrismaClient } from "@prisma/client";
import { Pedido, StatusPedido } from "../entidade/pedido";


// interface
export interface PedidoRepositorio {
    addCarrinho(clienteId: string, jogoId: string): Promise<void>
    alterarStatusPedido(idPedido: number, status:StatusPedido):Promise<void>
    // listarPorStatus(status:string):Promise<Pedido[]>
    gerarNota(idPedido:number):Promise<void>
    enviarRecibo(email:string):Promise<void>
    listarPorStatusCliente(status: StatusPedido, clienteId: string): Promise<string[]>;
}

export class PedidoRepositorioPrisma implements PedidoRepositorio {
    private constructor(readonly prisma: PrismaClient) {}
    listarPorStatus(status: StatusPedido, clienteId: string): Promise<string[]> {
        throw new Error("Method not implemented.");
    }
    // addBiblioteca(idPedido: number): Promise<void> {
    //     throw new Error("Method not implemented.");
    // }

    public static build(prisma: PrismaClient) {
        return new PedidoRepositorioPrisma(prisma);
    }

    public async addCarrinho(clienteId: string, jogoId: string): Promise<void> {
        try {
          const pedido = Pedido.gerarPedido(clienteId, jogoId);
          await this.prisma.pedido.create({
            data: {
              clienteId: pedido.cliente,
              jogoId: pedido.jogo,
              status: pedido.status,
              dataPedido: pedido.dataPedido,
              formaPagamentoId: pedido.pagamento ?? null,
              notaFiscal: pedido.notaFiscal ?? null,
            },
          });
        } catch (error) {
          console.error("Erro ao adicionar ao carrinho:", error);
        }
      }
    
    public async gerarNota(idPedido: number): Promise<void> {
        const pedido = await this.prisma.pedido.findUnique({
            where: { idPedido: idPedido },
        });
    
        if (!pedido) {
            console.error(`Pedido com ID ${idPedido} não encontrado.`);
            return;
        }
    
        const geraRecibo = crypto.randomUUID().toString();
        const pedidoAtualizado = await this.prisma.pedido.update({
            where: { idPedido: idPedido },
            data: { notaFiscal: geraRecibo },
        });
    
        console.log("Nota fiscal gerada:", pedidoAtualizado.notaFiscal);
    }

    public async alterarStatusPedido(idPedido: number, status:StatusPedido): Promise<void> {
        await this.prisma.pedido.update({
            where: { idPedido: idPedido },
            data: { status: status },
        });

        if (status === StatusPedido.Pago) {
            await this.gerarNota(idPedido);
        }

        const pedidoAtualizado = await this.prisma.pedido.findUnique({
            where: { idPedido: idPedido },
        });
    
        console.log("Pedido atualizado:", pedidoAtualizado);


    }

    public async enviarRecibo(email: string): Promise<void> {
        // await this.prisma.cliente.findUnique({
        //     where: {email},
        // });

        // return cli
        
        throw new Error("Em implementação");
    }
    
    // public async confirmarPedido(idPedido: number): Promise<void> {
    //     await this.prisma.pedido.update({
    //         where: { idPedido: idPedido },
    //         data: { status: StatusPedido.Confirmado },
    //     });
    //     console.log(await this.prisma.pedido.findUnique({
    //         where: { idPedido: idPedido }})
    //     );
    // }
    
    // public async confirmarPagamento(idPedido: number): Promise<void> {
        //     await this.prisma.pedido.update({
    //         where: { idPedido: idPedido },
    //         data: { status: StatusPedido.Pago},
    //     });
    //     console.log(await this.prisma.pedido.findUnique({
    //         where: { idPedido: idPedido }})
    //     );
    // }

    // public async negarPagamento(idPedido: number): Promise<void> {
    //     await this.prisma.pedido.update({
    //         where: { idPedido: idPedido },
    //         data: { status: StatusPedido.Negado},
    //     });
    //     console.log(await this.prisma.pedido.findUnique({
    //         where: { idPedido: idPedido }})
    //     );
    // }

    // public async cancelarPagamento(idPedido: number): Promise<void> {
    //     await this.prisma.pedido.update({
    //         where: { idPedido: idPedido },
    //         data: { status: StatusPedido.Cancelado},
    //     });
    //     console.log(await this.prisma.pedido.findUnique({
    //         where: { idPedido: idPedido }})
    //     );
    // }



    // public async addBiblioteca(idPedido: number): Promise<void> {
    //     await this.prisma.pedido.update({
    //         where: { idPedido: idPedido },
    //         data: { status: "biblioteca" },
    //     });
    //     console.log(await this.prisma.pedido.findUnique({
    //         where: { idPedido: idPedido }})
    //     );
    // }
    
    public async listarPorStatusCliente(status: StatusPedido, clienteId: string): Promise<string[]> {
        try {
            // Busca os pedidos com o status fornecido
            const pedidos = await this.prisma.pedido.findMany({
                where: { status: status , clienteId: clienteId},
                select: {
                    Jogo: {
                        select: {
                            idJogo: true
                        }
                    }
                }
            });
    
            // Mapeia os pedidos para obter uma lista de IDs dos jogos
            const jogoIds = pedidos.map(pedido => pedido.Jogo.idJogo);
    
            // Retorna a lista de IDs dos jogos
            return jogoIds;
        } catch (error) {
            console.error("Erro ao listar IDs dos jogos por status:", error);
            throw new Error("Erro ao listar IDs dos jogos por status");
        }
    }
    
    
    
    

    
}


