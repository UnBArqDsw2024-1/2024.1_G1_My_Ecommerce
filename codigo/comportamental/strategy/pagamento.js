class Pagamento {

  formaPagamento;
  
  constructor(formaPagamento) {
    this.formaPagamento = formaPagamento;
  }

  gerarPagamento(valorTotal) {
    this.formaPagamento.gerarPagamento(valorTotal);
    console.log("Pagamento gerado com sucesso!");
  }


}

module.exports = Pagamento;