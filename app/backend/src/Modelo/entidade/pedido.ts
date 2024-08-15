
export enum StatusPedido {
    Carrinho = "Adicionado ao carrinho",
    Confirmado = "Pedido confirmado, aguardando pagamento",
    Pago = "Pagamento aprovado",
    Negado = "Pagamento negado",
    Cancelado = "Pedido Cancelado"
}

export type PedidoProps = {
    idPedido: number,
    status: StatusPedido,
    dataPedido: Date,
    notaFiscal?: string,
    cliente: string,
    jogo: string,
    pagamento?: string,
}

export class Pedido {
    
    private constructor(readonly props: PedidoProps){}
    
    public static gerarPedido(
        cliente: string,
        jogo: string,
    ): Pedido {
        return new Pedido({
            idPedido: Math.floor(Math.random() * 1000),
            status: StatusPedido.Carrinho,
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
            status: StatusPedido.Carrinho,
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
    
    public get notaFiscal() {
        return this.props.notaFiscal;
    } 

    public atualizarPagamento(pagamento: string) {
        this.props.pagamento = pagamento;
    }

    public atualizarNotaFiscal(notaFiscal: string) {
        this.props.notaFiscal = notaFiscal;
    }

    
}