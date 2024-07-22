class FormaPagamento {
    constructor(dataVencimento) {
        this.dataVencimento = dataVencimento
        if (new.target === FormaPagamento) {
            throw new Error("Não é possível instanciar a classe abstrata diretamente.");
        }
    }

    // Método abstrato
    cancelarPagamento() {
        throw new Error("Método 'cancelarPagamento()' deve ser implementado.");
    }

    confirmarPagamento() {
        throw new Error("Método 'confirmarPagamento()' deve ser implementado.");
    }
}

class Boleto extends FormaPagamento {
    constructor(codigoNumero) {
        super();
        this.codigoNumero = codigoNumero;
    }

    cancelarPagamento() {
        return "Pagamento em Boleto Cancelado";
    }

    confirmarPagamento() {
        return "Pagamento em Boleto Confirmado";
    }

    gerarCodigoBarras() {
        return this.codigoNumero;
    }
}

class Pix extends FormaPagamento {
    constructor(chavePix) {
        super();
        this.chavePix = chavePix;
    }

    cancelarPagamento() {
        return "Pagamento de Pix Cancelado";
    }

    confirmarPagamento() {
        return "Pagamento de Pix Confirmado";
    }

    gerarQRCode() {
        return "QR Code";
    }
}

class Credito extends FormaPagamento {
    constructor(numeroCartao, titular, cvc, validade) {
        super();
        this.numeroCartao = numeroCartao;
        this.titular = titular;
        this.cvc = cvc;
        this.validade = validade;
    }

    cancelarPagamento() {
        return "Pagamento de Cartão Cancelado";
    }

    confirmarPagamento() {
        return "Pagamento de Cartão Confirmado";
    }

    solicitarCartao() {
        return this.numeroCartao;
    }
}

class JuncaoFormaPagamento extends FormaPagamento {
    constructor() {
        super();
        this.metodo = [];
    }

    adicionaPagamento(formaPagamento) {
        this.metodo.push(formaPagamento);
    }

    removePagamento(formaPagamento) {
        const index = this.metodo.indexOf(formaPagamento);
        if (index > -1) {
            this.metodo.splice(index, 1);
        }
    }

    cancelarPagamento() {
        this.metodo.forEach(metodo => metodo.cancelarPagamento());
        return "Todos os pagamentos foram cancelados.";
    }

    confirmarPagamento() {
        this.metodo.forEach(metodo => metodo.confirmarPagamento());
        return "Todos os pagamentos foram confirmados.";
    }
}

// Criando formas de pagamento
const cartaoCredito = new Credito('1234 5678 9101 1121', 'João Silva', '123', '12/25');
const boletoBancario = new Boleto('34191.75503 00000.104628 01605.093000 7 81180000025400');

console.log(cartaoCredito.solicitarCartao());

// Criando o composite
const juncaoPagamento = new JuncaoFormaPagamento();
juncaoPagamento.adicionaPagamento(cartaoCredito);
juncaoPagamento.adicionaPagamento(boletoBancario);

// Confirmando pagamentos
console.log(juncaoPagamento.confirmarPagamento()); // Saída: Todos os pagamentos foram confirmados.

// Cancelando pagamentos
console.log(juncaoPagamento.cancelarPagamento()); // Saída: Todos os pagamentos foram cancelados.