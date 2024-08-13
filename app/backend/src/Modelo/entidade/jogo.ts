
export type JogoProps = {
    idJogo: string;
    nomeJogo: string;
    precoJogo: number;
    descricao: string;
    dataLancamento: Date;
    dataLancamentoInicial: Date;
    desconto: number;
    quantidadeVendido: number;
    editora: string;
    desenvolvedora: string;
}

export class Jogo {
    private constructor(readonly props: JogoProps){}


    public static with(
        idJogo: string,
        nomeJogo: string,
        precoJogo: number,
        descricao: string,
        dataLancamento: Date,
        dataLancamentoInicial: Date,
        desconto: number,
        quantidadeVendido: number,
        editora: string,
        desenvolvedora: string,
    ) {
        return new Jogo({
            idJogo,
            nomeJogo,
            precoJogo,
            descricao,
            dataLancamento,
            dataLancamentoInicial,
            desconto,
            quantidadeVendido,
            desenvolvedora,
            editora
        });
    }

    public get idJogo(){
        return this.props.idJogo;
    }

    public get nomeJogo(){
        return this.props.nomeJogo;
    }

    public get precoJogo(){
        return this.props.precoJogo;
    }

    public get descricao(){
        return this.props.descricao;
    }

    public get dataLancamento(){
        return this.props.dataLancamento;
    }

    public get dataLancamentoInicial(){
        return this.props.dataLancamentoInicial;
    }

    public get desconto(){
        return this.props.desconto;
    }

    public get quantidadeVendido(){
        return this.props.quantidadeVendido;
    }

    public get desenvolvedora() {
        return this.props.desenvolvedora;
    }

    public get editora() {
        return this.props.editora;
    }
}
