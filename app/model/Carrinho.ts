import { Jogo } from "./Jogo.ts";

export class Carrinho {
    private jogos: Jogo[];

    constructor() {
        this.jogos = [];
    }

    calculaValorTotal(): number {
        let resultado: number = 0;
        this.jogos.forEach((jogo) => {
            resultado += jogo.getPreco;
        });
        return resultado;
    }

    // Em essência isso é um getJogosSelecionados, esse método vai ter uma lógica diferente?
    listaJogosSelecionados(): Jogo[] {
        return this.jogos;
    }

    verificaSeTemOJogo(): void {

    }

    confirmarPedido(): void {
        
    }

    // Setters
    public set setJogosSelecionados(jogos: Jogo[]) {
        this.jogos = jogos;
    }
}