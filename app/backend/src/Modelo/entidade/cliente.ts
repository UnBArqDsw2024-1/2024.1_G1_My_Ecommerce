
export type ClienteProps = {
    idCliente: string;
    nomeExibicao: string;
    // pais: string;
    // biblioteca: Biblioteca;
    // carrinho: Carrinho;
    // pedido: Pedido | null;
    dataNascimento: Date;
    nome: string;
    email: string;
    senha: string;
}

export class Cliente {
    private constructor(readonly props: ClienteProps){}
    
    public static with(
        idCliente: string,
        nomeExibicao: string,
        dataNascimento: Date,
        nome: string,
        email: string,
        senha: string
    ): Cliente {
        return new Cliente({
            idCliente,
            nomeExibicao,
            dataNascimento,
            nome,
            email,
            senha
        });
    }


    public get idCliente() {
        return this.props.idCliente;
    }

    public get nomeExibicao() {
        return this.props.nomeExibicao;
    }

    // Adicione getters conforme necessário, como:
    // public get pais() {
    //     return this.props.pais;
    // }

    // public get biblioteca() {
    //     return this.props.biblioteca;
    // }

    // public get carrinho() {
    //     return this.props.carrinho;
    // }

    // public get pedido() {
    //     return this.props.pedido;
    // }

    public get dataNascimento() {
        return this.props.dataNascimento;
    }

    public get nome() {
        return this.props.nome;
    }

    public get email() {
        return this.props.email;
    }

    public get senha() {
        return this.props.senha;
    }
}
