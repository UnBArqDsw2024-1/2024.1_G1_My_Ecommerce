import { FormaPagamento } from "./FormaPagamento";

export class Credito extends FormaPagamento {
    private numeroCartao: number;
    private titular: string;
    private cvc: number;
    private validade: Date;

    constructor(
        numeroCartao: number,
        titular: string,
        cvc: number,
        validade: Date,
        dataVencimento: Date
    ) {
        super(dataVencimento);
        this.numeroCartao = numeroCartao;
        this.titular = titular;
        this.cvc = cvc;
        this.validade = validade;
        this.dataVencimento = dataVencimento;
    }

    // Métodos Sobrescritos de FormaPagamento
    public cancelarPagamento(): string {
        // Simulando o processo
        const podeCancelarPagamento = Math.random() > 0.5; // Condição de exemplo

        if (podeCancelarPagamento) {
            return "Pagamento com crédito cancelado.";
        } else {
            return "Não foi possível cancelar o pagamento com crédito.";
        }
    }

    public confirmarPagamento(): string {
        // Simulando o processo
        const pagamentoConfirmado = Math.random() > 0.5; // Condição de exemplo

        if (pagamentoConfirmado) {
            return "Pagamento confirmado com sucesso.";
        } else {
            return "Não foi possível confirmar o pagamento";
        }
    }

    // Métodos próprios de Crédito
    public solicitarCartao(): string {
        // Simulando o processo
        const solicitacaoCartaoSucedida = Math.random() > 0.5; // Condição de exemplo

        if (solicitacaoCartaoSucedida) {
            return "Cartão solicitado com sucesso.";
        } else {
            return "Não foi possível solicitar o cartão.";
        }
    }

    // Getters
    public get getNumeroCartao(): number {
        return this.numeroCartao;
    }
    
    public get getTitular(): string {
        return this.titular;
    }

    public get getCvc(): number {
        return this.cvc;
    }

    public get getValidade(): Date {
        return this.validade;
    }

    public get getDataVencimento(): Date {
        return this.dataVencimento;
    }
}