import { Biblioteca } from "./Biblioteca.ts";
import { Jogo } from "./Jogo.ts";

export class Carrinho {
    private jogos: Jogo[];
    private biblioteca: Biblioteca;

    constructor(biblioteca: Biblioteca) {
        this.jogos = [];
        this.biblioteca = biblioteca;
    }

    calculaValorTotal(): number {
        let resultado: number = 0;
        this.jogos.forEach((jogo) => {
            resultado += jogo.getPreco;
        });
        return resultado;
    }

    verificaSeTemOJogo(): boolean {
        this.jogos.forEach((jogo) => {
            const jogoNaBiblioteca = this.biblioteca.pesquisarJogosPorNome(jogo.getNome);
            if (jogoNaBiblioteca.length !== 0){
                console.log(`O jogo ${jogo.getNome} já esta presente na sua biblioteca`);
                return true;
            }
        });
        return false;
    }

    //Continuar a implementação quando tiver com o banco de dados pronto
    addJogoAoCarrinho(jogo: Jogo): void {
        this.jogos.push(jogo);
    }

    // Em essência isso é um getJogosSelecionados, esse método vai ter uma lógica diferente?
    // Getters
    public get getJogosSelecionados(): Jogo[] {
        return this.jogos;
    }

    // Setters
    public set setJogosSelecionados(jogos: Jogo[]) {
        this.jogos = jogos;
    }
}