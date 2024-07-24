const readline = require('readline');
const Pagamento = require("./pagamento");
const Boleto = require("./boleto");
const Credito = require("./credito");
const Pix = require("./pix");


class Pedido {

 constructor(valorTotal) {
    this.numeroPedido = Math.random().toString(36).toUpperCase();;
    this.status = "Iniciado";
    this.valorTotal = valorTotal;
  }

    getNumeroPedido() {
        return this.numeroPedido;
    }

    getValorTotal() {
        return this.valorTotal;
    }
  
 // Seleciona o método de pagamento e chama o Contexto (Pagamento) para gerar o pagamento

  async realizarPagamento() {
  
  this.formaPagamento = await selecionarFormaPagamento();

  const pagamento = new Pagamento(this.formaPagamento);
  
  pagamento.gerarPagamento(this.valorTotal);

 }


}

module.exports = Pedido;

function selecionarFormaPagamento(){
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  console.log('Escolha a forma de pagamento');
  console.log('1 - Boleto');
  console.log('2 - Cartão de crédito');
  console.log('3 - Pix');

  return new Promise((resolve, reject) => {
    rl.question('Escolha uma opção: ', 
      (opcao) => {
        switch(opcao){
          case '1':
            opcao = new Boleto();
            break;
          case '2':
            opcao = new Credito();
            break;
          case '3':
            opcao = new Pix();
            break;
          default:
            opcao = 'Opção inválida';
        }
        rl.close();
        resolve(opcao);
    });
  });
}


