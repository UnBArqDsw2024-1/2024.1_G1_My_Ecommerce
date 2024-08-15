import { StatusPedido } from "../entidade/pedido";
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
    addCarrinho(clienteId: string, jogoId: string): Promise<void>
    alterarStatusPedido(idPedido: number, status:StatusPedido):Promise<void>
    // listarPorStatus(status:string):Promise<ListarPedidoDto>
    gerarNota(idPedido:number):Promise<void>
    enviarRecibo(email:string):Promise<void>
};

export class PedidoServicoImplementacao implements PedidoServico {
    
    private constructor(private prisma: PedidoRepositorio) {}
    
    public static build(prisma: PedidoRepositorio){
        return new PedidoServicoImplementacao(prisma);
    }
    
    public async addCarrinho(clienteId: string, jogoId: string): Promise<void> {
        
        
        await this.prisma.addCarrinho(clienteId, jogoId);
    }

    public async alterarStatusPedido(idPedido: number, status: StatusPedido): Promise<void> {
        await this.prisma.alterarStatusPedido(idPedido, status);
    }

    public async gerarNota(idPedido: number): Promise<void> {
        await this.prisma.gerarNota(idPedido);
    }

    public async enviarRecibo(email: string): Promise<void> {
        await this.prisma.enviarRecibo(email);
    }
    
    
}