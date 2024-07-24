const FormaPagamento = require("./formaPagamento");

class Pix extends FormaPagamento {
  
    constructor() {
      super();
      this.chavePix = Math.floor(Math.random() * 100000000000000);
  }

  gerarPagamento(){
    console.log("Chave Pix gerada: " + this.chavePix);
  }

  // cancelarPagamento() {
  //     return "Pagamento de Pix Cancelado";
  // }

  // confirmarPagamento() {
  //     return "Pagamento de Pix Confirmado";
  // }

  // gerarQRCode() {
  //     return "QR Code";
  // }
}

module.exports = Pix;
