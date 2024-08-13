import { Boleto } from "./Boleto.ts";
import { Credito } from "./Credito.ts";
import { FormaPagamento } from "./FormaPagamento.ts";
import { Jogo } from "./Jogo.ts";
import { Pix } from "./Pix.ts";

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
    ) {
        this.jogos = jogos;
        this.precoTotal = precoTotal;
        this.descontoTotal = descontoTotal;
        this.status = false;

        // Usar uma biblioteca para geração de UUID ou criar uma função usando Timestamp + Random
        const num = 1000 + (Math.random() * 16);
        this.numPedido = num.toString();
    }


    // Métodos
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
        
        if (this.formaPagamento instanceof Pix){
            const pixPagamento = this.formaPagamento as Pix;
            console.log("Espere um pouco...");
            const pixGerado = pixPagamento.gerarPixCopiaECola(); 
            console.log("PIX gerado: " + pixGerado);
            console.log(pixPagamento.confirmarPagamento());
        }else if (this.formaPagamento instanceof Credito) {
            const creditoPagamento = this.formaPagamento as Credito;
            console.log("Solicitando cartão...");
            const cartaoSolicitado = creditoPagamento.solicitarCartao(); 
            console.log(cartaoSolicitado);
            console.log(creditoPagamento.confirmarPagamento()); 
        } else if (this.formaPagamento instanceof Boleto) {
            const boletoPagamento = this.formaPagamento as Boleto;
            console.log("Gerando código de barras...");
            const codigoBarras = boletoPagamento.gerarCodigoBarras(); 
            console.log("Código de barras gerado: " + codigoBarras);
            console.log(boletoPagamento.confirmarPagamento()); 
        } else {
            console.log("Forma de pagamento não reconhecida.");
            return;
        }
        this.status = true;
        this.enviarRecibo();
    }
    
    // Setters
    public set setJogos(jogos: Jogo[]) {
        this.jogos = jogos;
    }

    public set setNumPedido(numPedido: string) {
        this.numPedido = numPedido;
    }

    public set setStatus(status: boolean) {
        this.status = status;
    }

    public set setDescontoTotal(desconto: number) {
        this.descontoTotal = desconto;
    }

    public set setPrecoTotal(preco: number) {
        this.precoTotal = preco;
    }

    public set setFormaDePagamento(formaPagamento: FormaPagamento) {
        this.formaPagamento = formaPagamento;
    }

    // Getters
    public get getJogos(): Jogo[] {
        return this.jogos;
    }

    public get getNumPedido(): string {
        return this.numPedido;
    }

    public get getStatus(): boolean {
        return this.status;
    }

    public get getDescontoTotal(): number {
        return this.descontoTotal;
    }

    public get getPrecoTotal(): number {
        return this.precoTotal;
    }

    public get getFormaDePagamento(): FormaPagamento {
        return this.formaPagamento;
    }
}