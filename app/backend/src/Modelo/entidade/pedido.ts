

export type PedidoProps = {
    idPedido: number,
    status: string,
    cliente: string,
    jogo: string,
    dataPedido: Date,
    pagamento?: string,
    notaFiscal?: string,
}

export class Pedido {
    
    private constructor(readonly props: PedidoProps){}
    
    public static gerarPedido(
        cliente: string,
        jogo: string,
    ): Pedido {
        return new Pedido({
            idPedido: Math.floor(Math.random() * 1000000),
            status: "carrinho",
            cliente,
            jogo,
            dataPedido: new Date(),
            pagamento: undefined,
            notaFiscal: undefined,
        });
    }
    
    public static with(
        idPedido: number,
        cliente: string,
        jogo: string,
        dataPedido: Date,
        pagamento?: string,
        notaFiscal?: string,
    ): Pedido {
        return new Pedido({
            idPedido,
            status: "carrinho",
            cliente,
            jogo,
            dataPedido,
            pagamento,
            notaFiscal,
        });
    }

    public get idPedido() {
        return this.props.idPedido;
    }

    public get status() {
        return this.props.status;
    }

    public get cliente() {
        return this.props.cliente;
    }

    public get jogo() {
        return this.props.jogo;
    }

    public get dataPedido() {
        return this.props.dataPedido;
    }

    public get pagamento() {
        return this.props.pagamento;
    }    

}