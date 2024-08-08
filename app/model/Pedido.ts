import { FormaPagamento } from "./FormaPagamento.ts";
import { Jogo } from "./Jogo.ts";

export class Pedido {
    private jogos: Jogo[];
    private numPedido: string;
    private status: boolean;
    private descontoTotal: number;
    private precoTotal: number;
    private formaPagamento: FormaPagamento;

    constructor(
        jogos: Jogo[],
        descontoTotal: number,
        precoTotal: number,
        formaPagamento: FormaPagamento
    ) {
        this.jogos = jogos;
        this.precoTotal = precoTotal;
        this.descontoTotal = descontoTotal;
        this.formaPagamento = formaPagamento;
        this.status = false;

        // Usar uma biblioteca para geração de UUID ou criar uma função usando Timestamp + Random
        const num = 1000 + (Math.random() * 16);
        this.numPedido = num.toString();
    }

    public addBiblioteca(): void {

    }

    public addQuantidadeVendido(): void {
        this.jogos.forEach((jogo) => {
            jogo.setQuantidadeVendido = 1;
        })
    }

    public enviarRecibo(): void {
        console.log("Enviando Recibo...")
    }

    public confirmarPedido(): void {
        console.log("Confirmando Pedido...")
        // if(<Inserir método de pagamento>)
        this.status = true;
        this.enviarRecibo();
    }

    public cancelarPedido(): void {

    }
}