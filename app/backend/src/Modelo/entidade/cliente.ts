import { Pais } from "@prisma/client";

export type ClienteProps = {
    idCliente: string,
    nomeExibicao: string,
    dataNascimento: Date,
    nome: string,
    email: string,
    senha: string,
    pais?: Pais,
    // pedido?: string[],
    // carrinho?: string[],
}

export class Cliente {
    
    private constructor(readonly props: ClienteProps){}
    
    public static criarCliente(
        idCliente: string,
        nomeExibicao: string,
        dataNascimento: Date,
        nome: string,
        email: string,
        senha: string,
        pais?: Pais
    ): Cliente {
        return Cliente.with(idCliente, nomeExibicao, dataNascimento, nome, email, senha, pais);
    }
    
    public static with(
        idCliente: string,
        nomeExibicao: string,
        dataNascimento: Date,
        nome: string,
        email: string,
        senha: string,
        pais?: Pais,
        // pedido?: string[],
        // carrinho?: string[]
    ): Cliente {
        return new Cliente({
            idCliente,
            nomeExibicao,
            dataNascimento,
            nome,
            email,
            senha,
            pais,
            // pedido,
            // carrinho
        });
    }

    public get idCliente() {
        return this.props.idCliente;
    }

    public get nomeExibicao() {
        return this.props.nomeExibicao;
    }

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

    public get pais() {
        return this.props.pais;
    }

    // public validarSenha(email:string, senha:string){
    //     if (this.email !== email && this.senha !== senha ){
    //         throw new Error(
    //             "Login incorreta"
    //         );
    //     } else {return "Sucesso"}
    // }
}