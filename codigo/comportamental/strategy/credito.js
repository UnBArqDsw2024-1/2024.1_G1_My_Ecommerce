const FormaPagamento = require('./formaPagamento');
const prompt = require('prompt-sync')();

class Credito extends FormaPagamento {
  numeroCartao;
  titular;
  cvc;
  validade;

  constructor() {
    super();
    this.numeroCartao = prompt('Digite o número do cartão:');
    this.titular = prompt('Digite o nome do titular do cartão: ');
    this.cvc = prompt('Digite o código de segurança (CVC): ');
    this.validade = prompt('Digite a validade do cartão: ');
  }

  gerarPagamento() {
    console.log("Número do cartão: " + this.numeroCartao);
  }

  // cancelarPagamento() {
  //     return "Pagamento de Cartão Cancelado";
  // }

  // confirmarPagamento() {
  //     return "Pagamento de Cartão Confirmado";
  // }

  // solicitarCartao() {
  //     return this.numeroCartao;
  // }
}

module.exports = Credito;