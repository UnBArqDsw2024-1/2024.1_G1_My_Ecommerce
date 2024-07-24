class Carrinho {
    constructor() {
        this.jogos = [];
        this.pedido = string;
    }

    addJogo(jogo) {
        this.jogos.push(jogo);
    }

    removeJogo(jogos) {
        const index = this.jogos.indexOf(jogos);
        if (index > -1) {
            this.jogos.splice(index, 1);
        }
    }

    calculaValorTotal() {
        return this.jogos.reduce((sum, jogo) => sum + jogo.getPreco(), 0);
    }

    gerarPedido() {
        this.pedido = Math.random().toString(36).substr(2, 10).toUpperCase();
    }

    criarPedido(formaPagamento) {
        this.gerarPedido(); 
        const valorTotal = this.calculaValorTotal(); 
        return new Pedido(this.pedido, valorTotal, formaPagamento); 
    }

}