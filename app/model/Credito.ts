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
    public cancelarPagamento(): void {
        // Simulando o processo
        const podeCancelarPagamento = Math.random() > 0.5; // Condição de exemplo

        if (podeCancelarPagamento) {
            console.log("Pagamento confirmado com sucesso.");
        } else {
            console.log("Não foi possível confirmar o pagamento.");
        }
    }

    public confirmarPagamento(): void {
        // Simulando o processo
        const pagamentoConfirmado = Math.random() > 0.5; // Condição de exemplo

        if (pagamentoConfirmado) {
            console.log("Pagamento confirmado com sucesso.");
        } else {
            console.log("Não foi possível confirmar o pagamento.");
        }
    }

    // Métodos próprios de Crédito
    public solicitarCartao(): void {
        // Simulando o processo
        const solicitacaoCartaoSucedida = Math.random() > 0.5; // Condição de exemplo

        if (solicitacaoCartaoSucedida) {
            console.log("Cartão solicitado com sucesso.");
        } else {
            console.log("Não foi possível solicitar o cartão.");
        }
    }
}