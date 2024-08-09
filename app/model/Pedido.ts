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


    // Métodos
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

    /* 
    Como podemos deletar um pedido? se for para deletar a instância é necessário mudar a classe
    Uma instância não consegue deletar ela mesma, para deletar uma instância é preciso remover as referências dessa instância e deixar o GC limpar
    */
    public cancelarPedido(): void {

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

}