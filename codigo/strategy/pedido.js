class Pedido {
    constructor(numeroPedido, valorTotal, formaPagamento) {
        this.numeroPedido = numeroPedido;
        this.valorTotal = valorTotal;
        this.pagamento = pagamento; 
    }

    getNumeroPedido() {
        return this.numeroPedido;
    }

    getValorTotal() {
        return this.valorTotal;
    }

    gerarPagamento() {
        if (this.formaPagamento) {
            this.formaPagamento.gerarPagamento(this.valorTotal);
        } else {
            throw new Error("Método de pagamento não definido.");
        }
    }
}