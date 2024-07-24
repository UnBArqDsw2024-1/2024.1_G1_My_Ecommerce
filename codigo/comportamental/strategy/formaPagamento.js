class FormaPagamento {
  constructor(dataVencimento) {
      this.dataVencimento = dataVencimento
      if (new.target === FormaPagamento) {
          throw new Error("Não é possível instanciar a classe abstrata diretamente.");
      }
  }

  // Métodos abstratos

  gerarPagamento() {
      throw new Error("Método 'gerarPagamento()' deve ser implementado.");
  }

  cancelarPagamento() {
      throw new Error("Método 'cancelarPagamento()' deve ser implementado.");
  }

  confirmarPagamento() {
      throw new Error("Método 'confirmarPagamento()' deve ser implementado.");
  }
}

module.exports = FormaPagamento;






