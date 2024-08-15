import { PrismaClient } from "@prisma/client";
import { Pedido } from "../entidade/pedido";


// interface
export interface PedidoRepositorio {
    addBiblioteca(idPedido:number):Promise<void>
    confirmarPedido(idPedido:number):Promise<void>
    confirmarPagamento(idPedido:number):Promise<void>
    listarPorStatus(status:string):Promise<Pedido[]>
    gerarRecibo(idPedido:number):Promise<void>
    enviarRecibo(email:string):Promise<void>
}

export class PedidoRepositorioPrisma implements PedidoRepositorio {
    private constructor(readonly prisma: PrismaClient) {}
    addBiblioteca(idPedido: number): Promise<void> {
        throw new Error("Method not implemented.");
    }

    public async addCarrinho(cliente: string, jogo: string): Promise<void> {
        // Cria uma instância de Pedido usando o método gerarPedido
        // const pedido = Pedido.gerarPedido(cliente, jogo);

        // // Adiciona o pedido ao banco de dados, omitindo o idPedido se for autogerado
        // await this.prisma.pedido.create({
        //     data: {
        //         cliente: pedido.cliente,
        //         jogo: pedido.jogo,
        //         status: pedido.status,
        //         dataPedido: pedido.dataPedido,
        //         pagamento: pedido.pagamento ?? null, // Defina como null se pagamento não estiver definido
        //         notaFiscal: Nota.idNota ?? null, // Defina como null se notaFiscal não estiver definido
        //     }
        // });
        throw new Error("Em implementação");
    }
    
    public static build(prisma: PrismaClient) {
        return new PedidoRepositorioPrisma(prisma);
    }

    public async gerarRecibo(idPedido: number): Promise<void> {
        // const geraRecibo = crypto.randomUUID().toString();
        // await this.prisma.pedido.update({
        //     where: { idPedido: idPedido},
        //     data: { notaFiscal: geraRecibo },
        // });
        throw new Error("Em implementação");
    }

    public async enviarRecibo(email: string): Promise<void> {
        throw new Error("Em implementação");
    }

    public async confirmarPedido(idPedido: number): Promise<void> {
        await this.prisma.pedido.update({
            where: { idPedido: idPedido },
            data: { status: "aguargando pagamento" },
        });
        console.log(await this.prisma.pedido.findUnique({
            where: { idPedido: idPedido }})
        );
    }
    
    public async confirmarPagamento(idPedido: number): Promise<void> {
        await this.prisma.pedido.update({
            where: { idPedido: idPedido },
            data: { status: "pago" },
        });
        console.log(await this.prisma.pedido.findUnique({
            where: { idPedido: idPedido }})
        );
    }

    // public async addBiblioteca(idPedido: number): Promise<void> {
    //     await this.prisma.pedido.update({
    //         where: { idPedido: idPedido },
    //         data: { status: "biblioteca" },
    //     });
    //     console.log(await this.prisma.pedido.findUnique({
    //         where: { idPedido: idPedido }})
    //     );
    // }
    
    public async listarPorStatus(status: string): Promise<Pedido[]> {
        // const aPedidos = await this.prisma.pedido.findMany({
        //     where: { status: { contains: status }},
        //     include: {
        //         Cliente: { select: { idCliente: true } },
        //         Jogo: { select: { idJogo: true } },
        //         Pagamento: { select: { nomePagamento: true } },
        //     }
        // });
    
        // // Se não encontrar nenhum jogo, retorna uma lista vazia
        // if (aPedidos.length === 0) return [];

        // const pedidos = aPedidos.map((p) =>  {
        //     const {
        //         idPedido,
        //         status,
        //         Cliente,
        //         dataPedido,
        //         Jogo,
        //         Pagamento,
        //     } = p;
        //     return Pedido.with(
        //         idPedido,
        //         status,
        //         Cliente?.idCliente ?? "",
        //         Jogo?.idJogo ?? "",
        //         dataPedido,
        //         Pagamento?.nomePagamento ?? "",
        //         // Nota.idNota, // mudar o nome no banco
        //     );
        // });
        // return pedidos;
        throw new Error("Em implementação");

    }
    

    
}
