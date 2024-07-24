const FormaPagamento = require("./formaPagamento.js");

class Boleto extends FormaPagamento {
  
  codigoNumerico;

  constructor() {
      super();
      this.codigoNumerico = Math.floor(Math.random() * 100000000000000);
      this.dataVencimento = new Date();
  }

  gerarPagamento(){
    console.log("Número do boleto: " + this.codigoNumerico); 
  }

  // cancelarPagamento() {
  //     return "Pagamento em Boleto Cancelado";
  // }

  // confirmarPagamento() {
  //     return "Pagamento em Boleto Confirmado";
  // }

  // gerarCodigoBarras() {
  //     return this.codigoNumero;
  // }
}

module.exports = Boleto;