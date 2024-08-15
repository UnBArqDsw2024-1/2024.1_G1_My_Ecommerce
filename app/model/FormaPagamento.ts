export abstract class FormaPagamento {
    protected dataVencimento: Date;

    constructor(dataVencimento: Date) {
        this.dataVencimento = dataVencimento;
        if (new.target === FormaPagamento) {
            throw new Error("Não é possível instanciar a classe abstrata diretamente.");
        }
    }

    // Métodos abstratos
    public abstract cancelarPagamento(): void;

    public abstract confirmarPagamento(): void;
}
