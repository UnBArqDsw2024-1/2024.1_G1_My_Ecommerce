import { PrismaClient, Cliente as PrismaCliente } from "@prisma/client";
import { Biblioteca } from "./Biblioteca";
import { Carrinho } from "./Carrinho";
import { Pedido } from "./Pedido";

export type ClienteProps = {
    idCliente: string;
    nomeExibicao: string;
    pais: string;
    biblioteca: Biblioteca;
    carrinho: Carrinho;
    pedido: Pedido | null;
    dataNascimento: Date;
    nome: string;
    email: string;
    senha: string;
}

const prisma = new PrismaClient();

export class Cliente {
    private constructor(readonly props: ClienteProps){}

    public static async cria (
        idCliente: string,
        nomeExibicao: string,
        pais: string,
        biblioteca: Biblioteca,
        carrinho: Carrinho,
        pedido: Pedido | null,
        dataNascimento: Date,
        nome: string,
        email: string,
        senha: string
    ){
        const cliente = await prisma.cliente.create({
            data: {
                idCliente,
                nomeExibicao,
                pais,
                biblioteca,
                carrinho,
                pedido,
                dataNascimento,
                nome,
                email,
                senha
            }
        })

        return new Cliente(cliente)
    }

    // Métodos próprios de Cliente
    public async removeUsuario(): Promise<void> {
        await prisma.cliente.delete({
            where: { idCliente: this.props.idCliente },
        });
    }

    public gerarPedido(): void {
        console.log("Gerando pedido...");
        let precoOriginal = 0;
        let precoDesconto = 0;

        this.props.carrinho.getJogosSelecionados.forEach((jogo) => {
            precoOriginal += jogo.getPreco;
            precoDesconto += jogo.getPrecoComDesconto;
        });
        let descontoTotal = (precoDesconto / precoOriginal) * 100;
        
        this.props.pedido = new Pedido(
            this.props.carrinho.getJogosSelecionados,
            descontoTotal,
            this.props.carrinho.calculaValorTotal(),
        )
    }
    
    public addBiblioteca(): void {
        if (this.props.pedido && this.props.pedido.getStatus) {
            let jogosPossuidos = this.props.biblioteca.getJogosPossuidos;
            this.props.pedido.getJogos.forEach((jogo) => {
                jogosPossuidos.push(jogo);
            })
            this.props.biblioteca.setJogosPossuidos = jogosPossuidos;
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
        this.props.pedido = null;
        formaPagamento.cancelarPagamento();
    }

    // Setters
    public set setPais(novoPais: string) {
        this.props.pais = novoPais;
    }

    public set setNomeExibicao(novoNomeExibicao: string) {
        this.props.nomeExibicao = novoNomeExibicao;
    }

    public set setNome(novoNome: string) {
        this.props.nome = novoNome;
    }

    public set setEmail(novoEmail: string) {
        this.props.email = novoEmail;
    }

    public set setSenha(novaSenha: string) {
        // TODO Adicionar uma biblioteca para criptografar a senha
        this.props.senha = novaSenha;
    }

    // Getters
    public get getIdCliente(): string {
        return this.props.idCliente;
    }

    public get getNomeExibicao(): string {
        return this.props.nomeExibicao;
    }
    
    public get getPais(): string {
        return this.props.pais;
    }

    public get getBiblioteca(): Biblioteca {
        return this.props.biblioteca;
    }

    public get getCarrinho(): Carrinho {
        return this.props.carrinho;
    }

    public get getDataNascimento(): Date {
        return this.props.dataNascimento;
    }

    public get getNome(): string {
        return this.props.nome;
    }

    public get getEmail(): string {
        return this.props.email;
    }

    public get getSenha(): string {
        return this.props.senha;
    }    
}