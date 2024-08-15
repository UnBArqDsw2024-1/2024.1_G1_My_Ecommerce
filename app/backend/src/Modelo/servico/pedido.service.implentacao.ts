import { PedidoRepositorio } from "../repositorio/pedido.repositorio";


export type ListarPedidoDto = {
    Pedidos: {
        idPedido: string,
        status: string,
        cliente: string,
        jogo: string,
        dataPedido: Date,
        pagamento: string,
        notaFiscal: string
    }[];
}

export interface PedidoServico {
    addBiblioteca(idPedido:number):Promise<void>
    confirmarPedido(idPedido:number):Promise<void>
    confirmarPagamento(idPedido:number):Promise<void>
    listarPorStatus(status:string):Promise<ListarPedidoDto>
    gerarRecibo(idPedido:number):Promise<void>
    enviarRecibo(email:string):Promise<void>
};

export class PedidoServicoImplementacao implements PedidoServico {
    
    private constructor(private prisma: PedidoRepositorio) {}
    
    public static build(prisma: PedidoRepositorio){
        return new PedidoServicoImplementacao(prisma);
    }
    public async addBiblioteca(idPedido: number): Promise<void> {
        await this.prisma.addBiblioteca(idPedido);
    }
    public async confirmarPedido(idPedido: number): Promise<void> {
        await this.prisma.confirmarPedido(idPedido);
    }
    public async confirmarPagamento(idPedido: number): Promise<void> {
        await this.prisma.confirmarPagamento(idPedido);
    }
    
    public async gerarRecibo(idPedido: number): Promise<void> {
        throw new Error("Method not implemented.");
    }
    public async enviarRecibo(email: string): Promise<void> {
        throw new Error("Method not implemented.");
    }
    public async listarPorStatus(status: string): Promise<ListarPedidoDto> {
        throw new Error("Method not implemented.");
    }
    
    
    

    
}