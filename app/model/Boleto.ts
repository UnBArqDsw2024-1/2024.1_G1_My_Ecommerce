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
    public cancelarPagamento(): string {
        
        return "Pagamento em boleto cancelado";
    }

    public confirmarPagamento(): string {
        
        return "Pagamento em boleto confirmado";
    }

    // Métodos próprios de Boleto
    public gerarCodigoBarras(): number {
        const codigoBarras = Math.floor(Math.random() * 10**12 );

        return codigoBarras;
    }

    // Getters
    public get getCodigoNumerico(): string {
        return this.codigoNumerico;
    }

    public get getDataVencimento(): Date {
        return this.dataVencimento;
    }
}