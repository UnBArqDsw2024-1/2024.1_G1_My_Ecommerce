import { Biblioteca } from "./Biblioteca";
import { Carrinho } from "./Carrinho";
import { FormaPagamento } from "./FormaPagamento";
import { Pedido } from "./Pedido";

export class Cliente {
    private idCliente: string;
    private nomeExibicao: string;
    private pais: string;
    private biblioteca: Biblioteca;
    private carrinho: Carrinho;
    private pedido: Pedido | null;
    private dataNascimento: Date;
    private nome: string;
    private email: string;
    private senha: string;

    constructor(
        idCliente: string,
        nomeExibicao: string,
        pais: string,
        dataNascimento: Date,
        nome: string,
        email: string,
        senha: string
    ) {
        this.idCliente = idCliente;
        this.nomeExibicao = nomeExibicao;
        this.pais = pais;
        this.biblioteca = new Biblioteca();
        this.carrinho = new Carrinho(this.biblioteca);
        this.pedido = null;
        this.dataNascimento = dataNascimento;
        this.nome = nome;
        this.email = email;
        this.senha = senha;
    }

    // Métodos próprios de Cliente
    public removeUsuario(): void {
        // TODO Criar uma requisição DELETE 
    }

    public gerarPedido(): void {
        console.log("Gerando pedido...");
        let precoOriginal = 0;
        let precoDesconto = 0;

        this.carrinho.getJogosSelecionados.forEach((jogo) => {
            precoOriginal += jogo.getPreco;
            precoDesconto += jogo.getPrecoComDesconto;
        });
        let descontoTotal = (precoDesconto / precoOriginal) * 100;
        
        this.pedido = new Pedido(
            this.carrinho.getJogosSelecionados,
            descontoTotal,
            this.carrinho.calculaValorTotal(),
        )
    }
    
    public addBiblioteca(): void {
        if (this.pedido && this.pedido.getStatus) {
            let jogosPossuidos = this.biblioteca.getJogosPossuidos;
            this.pedido.getJogos.forEach((jogo) => {
                jogosPossuidos.push(jogo);
            })
            this.biblioteca.setJogosPossuidos = jogosPossuidos;
        } else {
            console.log("Pedido não confirmado");
        }
    }
    
    /* 
    Como podemos deletar um pedido? se for para deletar a instância é necessário mudar a classe
    Uma instância não consegue deletar ela mesma, para deletar uma instância é preciso remover as referências dessa instância e deixar o GC limpar
    */
    public cancelarPedido(formaPagamento: FormaPagamento): void {
        // anular forma de pagamento, tirar referência da instância de pedido
        this.pedido = null;
        formaPagamento.cancelarPagamento();
    }

    // Setters
    public set setPais(novoPais: string) {
        this.pais = novoPais;
    }

    public set setNomeExibicao(novoNomeExibicao: string) {
        this.nomeExibicao = novoNomeExibicao;
    }

    public set setNome(novoNome: string) {
        this.nome = novoNome;
    }

    public set setEmail(novoEmail: string) {
        this.email = novoEmail;
    }

    public set setSenha(novaSenha: string) {
        // TODO Adicionar uma biblioteca para criptografar a senha
        this.senha = novaSenha;
    }

    // Getters
    public get getIdCliente(): string {
        return this.idCliente;
    }

    public get getNomeExibicao(): string {
        return this.nomeExibicao;
    }
    
    public get getPais(): string {
        return this.pais;
    }

    public get getBiblioteca(): Biblioteca {
        return this.biblioteca;
    }

    public get getCarrinho(): Carrinho {
        return this.carrinho;
    }

    public get getDataNascimento(): Date {
        return this.dataNascimento;
    }

    public get getNome(): string {
        return this.nome;
    }

    public get getEmail(): string {
        return this.email;
    }

    public get getSenha(): string {
        return this.senha;
    }    
}
