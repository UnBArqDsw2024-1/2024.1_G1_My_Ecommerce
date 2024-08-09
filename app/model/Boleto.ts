import { FormaPagamento } from "./FormaPagamento";

export class Boleto extends FormaPagamento {
    private codigoNumerico: string;

    constructor(
        codigoNumerico: string,
        dataVencimento: Date
    ) {
        super(dataVencimento);
        this.codigoNumerico = codigoNumerico;
    }

    // Métodos Sobrescritos de FormaPagamento
    public cancelarPagamento(): void {
        // Implementar Lógica
        return;
    }

    public confirmarPagamento(): void {
        // Implementar Lógica
        return;
    }

    // Métodos próprios de Boleto
    public gerarCodigoBarras(): void {
        return;
    }

}