
export type JogoProps = {
    idJogo: string,
    nomeJogo: string,
    precoJogo: number,
    descricao: string,
    dataLancamento: Date,
    dataLancamentoInicial: Date,
    desconto: number,
    quantidadeVendido: number,
    editora?: string,
    desenvolvedora?: string,
    plataforma: string,
    imagemCaminho: string,
    generos?: string[],
    recursos?: string[],
    tipos?: string[]
}

export class Jogo {
    private constructor(private readonly props: JogoProps) {}

    public static with(
        idJogo: string,
        nomeJogo: string,
        precoJogo: number,
        descricao: string,
        dataLancamento: Date,
        dataLancamentoInicial: Date,
        desconto: number,
        quantidadeVendido: number,
        plataforma: string,
        imagemCaminho: string,
        editora?: string,
        desenvolvedora?: string,
        generos?: string[],
        recursos?: string[],
        tipos?: string[]
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
            plataforma,
            imagemCaminho,
            editora,
            desenvolvedora,
            generos,
            recursos,
            tipos
        });
    }

    public get idJogo() {
        return this.props.idJogo;
    }

    public get nomeJogo() {
        return this.props.nomeJogo;
    }

    public get precoJogo() {
        return this.props.precoJogo;
    }

    public get descricao() {
        return this.props.descricao;
    }

    public get dataLancamento() {
        return this.props.dataLancamento;
    }

    public get dataLancamentoInicial() {
        return this.props.dataLancamentoInicial;
    }

    public get desconto() {
        return this.props.desconto;
    }

    public get quantidadeVendido() {
        return this.props.quantidadeVendido;
    }

    public get plataforma() {
        return this.props.plataforma;
    }

    public get imagemCaminho() {
        return this.props.imagemCaminho;
    }

    public get editora() {
        return this.props.editora;
    }

    public get desenvolvedora() {
        return this.props.desenvolvedora;
    }

    public get generos() {
        return this.props.generos ?? [];
    }

    public get recursos() {
        return this.props.recursos ?? [];
    }

    public get tipos() {
        return this.props.tipos ?? [];
    }
}
