// implementar classe abstrata
// referencia strategy

// formaPagamento.ts
export abstract class FormaPagamento {
    protected dataVencimento: Date;

    constructor(dataVencimento: Date) {
        if (new.target === FormaPagamento) {
            throw new Error("Não é possível instanciar a classe abstrata diretamente.");
        }
        this.dataVencimento = dataVencimento;
    }

    abstract gerarPagamento(): void;
    abstract cancelarPagamento(): void;
    abstract confirmarPagamento(): void;
}  
 // pix.ts
export class Pix extends FormaPagamento {
    private chavePix: number;

    constructor(dataVencimento: Date) {
        super(dataVencimento);
        this.chavePix = Math.floor(Math.random() * 100000000000000);
    }


    gerarPagamento(): void {
        console.log("Chave Pix gerada: " + this.chavePix);
    }

    cancelarPagamento(): void {
        console.log("Pagamento de Pix Cancelado");
    }

    confirmarPagamento(): void {
        console.log("Pagamento de Pix Confirmado");
    }
}

// boleto.ts
export class Boleto extends FormaPagamento {
    private codigoNumerico: number;

    constructor(dataVencimento: Date) {
        super(dataVencimento);
        this.codigoNumerico = Math.floor(Math.random() * 100000000000000);
    }

    gerarPagamento(): void {
        console.log("Número do boleto: " + this.codigoNumerico);
    }

    cancelarPagamento(): void {
        console.log("Pagamento em Boleto Cancelado");
    }

    confirmarPagamento(): void {
        console.log("Pagamento em Boleto Confirmado");
    }
}