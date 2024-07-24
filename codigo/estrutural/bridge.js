class Pedido {
    constructor(numPedido, idCliente, status, precoTotal, descontoTotal, tipoArquivo, geradorArquivo) {
        this.numPedido = numPedido;
        this.idCliente = idCliente;
        this.status = status;
        this.precoTotal = precoTotal;
        this.descontoTotal = descontoTotal;
        this.tipoArquivo = tipoArquivo;
        this.geradorArquivo = geradorArquivo;
    }
    formato() {
        throw new Error('Método "formato()" precisa ser implementado.');
    }
}

class Recibo extends Pedido {
    constructor(numPedido, idCliente, status, precoTotal, descontoTotal, tipoArquivo, geradorArquivo) {
        super(numPedido, idCliente, status, precoTotal, descontoTotal, tipoArquivo, geradorArquivo);
    }
    formato() {
        if (this.tipoArquivo === 'txt' || this.tipoArquivo === 'pdf') {
            this.geradorArquivo.format(this);
        } else {
            console.log('Não é possível gerar o recibo no tipo de arquivo especificado.');
        }
    }
}

class GeradorArquivo {
    format(pedido) {
        throw new Error('Método "formato()" precisa ser implementado.');
    }
}

class GeradorTXT extends GeradorArquivo {
    constructor(nome) {
        super();
        this.geradorNome = nome;
    }
    format(pedido) {
        console.log('Formatando o documento enviado usando como base TXT.');
    }
}

class GeradorPDF extends GeradorArquivo {
    constructor(nome) {
        super();
        this.geradorNome = nome;
    }
    format(pedido) {
        console.log('Formatando o documento enviado usando como base PDF.');
    }
}

class Carrinho {
    static main() {
        let geradorArquivo = new GeradorTXT('GeradorTXT');
        let pedido = new Recibo('001', '123', 'em processamento', 100.0, 10.0, 'txt', geradorArquivo);
        pedido.formato();
        geradorArquivo = new GeradorPDF('GeradorPDF');
        pedido = new Recibo('002', '456', 'completo', 200.0, 20.0, 'pdf', geradorArquivo);
        pedido.formato();
    }
}
Carrinho.main();
