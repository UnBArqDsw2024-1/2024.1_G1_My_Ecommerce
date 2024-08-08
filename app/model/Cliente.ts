import { Biblioteca } from "./Biblioteca";
import { Carrinho } from "./Carrinho";
import { Usuario } from "./Usuario";

export class Cliente extends Usuario {
    private idCliente: string;
    private nomeExibicao: string;
    private pais: string;
    private biblioteca: Biblioteca;
    private carrinho: Carrinho;
    private dataNascimento: Date;

    constructor(
        idCliente: string,
        nomeExibicao: string,
        pais: string,
        biblioteca: Biblioteca,
        carrinho: Carrinho,
        dataNascimento: Date,
        nome: string,
        email: string,
        senha: string
    ) {
        super(nome, email, senha);
        this.idCliente = idCliente;
        this.nomeExibicao = nomeExibicao;
        this.pais = pais;
        this.biblioteca = biblioteca;
        this.carrinho = carrinho;
        this.dataNascimento = dataNascimento;
    }

    // Métodos próprios de Cliente
    public visualizarProdutos(): void {
        console.log("Visualizando produtos...");
    }

    public gerarPedido(): void {
        console.log("Gerando pedido...");
    }
}
