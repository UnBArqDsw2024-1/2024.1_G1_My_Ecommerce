import { JogoRepositorio } from "../repositorio/jogo.repositorio";

// metodos para a aplicacao
export type ListaJogoDto = {
    jogos: {
        idJogo: string;
        nomeJogo: string;
        precoJogo: number;
        descricao: string;
        dataLancamento: Date;
        dataLancamentoInicial: Date;
        desconto: number;
        quantidadeVendido: number;
        editora?: string;
        desenvolvedora?: string;
        GeneroJogo?: string[];
        RecursoJogo?: string[];
        TipoJogo?: string[];
    }[];
};

export type JogoDto = {
    idJogo: string;
    nomeJogo: string;
    precoJogo: number;
    descricao: string;
    dataLancamento: Date;
    dataLancamentoInicial: Date;
    desconto: number;
    quantidadeVendido: number;
    editora?: string;
    desenvolvedora?: string;
    GeneroJogo?: string[];
    RecursoJogo?: string[];
    TipoJogo?: string[];
};



export interface JogoServico {
    lista(): Promise<ListaJogoDto>;
    pesquisarPorNome(nomeJogo: string): Promise<ListaJogoDto>;
    buscarPorId(idJogo:string): Promise<JogoDto>;
    // pesquisa(nomeJogo: string): Promise<PesquisaSaidaDto>;
};

export class JogoServicoImplementacao implements JogoServico {

    private constructor(readonly repositorio: JogoRepositorio){}

    public static build(repositorio: JogoRepositorio){
        return new JogoServicoImplementacao(repositorio);
    }

    public async lista(): Promise<ListaJogoDto> {
        const aJogos = await this.repositorio.lista();
        // lista de produtos
        const jogos = aJogos.map((j) => {
            return {
                idJogo: j.idJogo,
                nomeJogo: j.nomeJogo,
                precoJogo: j.precoJogo,
                descricao: j.descricao,
                dataLancamento: j.dataLancamento,
                dataLancamentoInicial: j.dataLancamentoInicial,
                desconto: j.desconto,
                quantidadeVendido: j.quantidadeVendido,
                editora: j.editora ?? '',
                desenvolvedora: j.desenvolvedora ?? '',
                generos: j.generos,
                recursos: j.recursos,
                tipos: j.tipos
            };
        });

        const saida: ListaJogoDto = {
            jogos, 
        };

        return saida;
    }

    public async pesquisarPorNome(nomeJogo: string): Promise<ListaJogoDto> {
        const aJogos = await this.repositorio.pesquisarPorNome(nomeJogo);
        // Lista de produtos
        const jogos = aJogos.map((j) => {
            return {
                idJogo: j.idJogo,
                nomeJogo: j.nomeJogo,
                precoJogo: j.precoJogo,
                descricao: j.descricao,
                dataLancamento: j.dataLancamento,
                dataLancamentoInicial: j.dataLancamentoInicial,
                desconto: j.desconto,
                quantidadeVendido: j.quantidadeVendido,
                editora: j.editora ?? '',
                desenvolvedora: j.desenvolvedora ?? '',
                generos: j.generos,
                recursos: j.recursos,
                tipos: j.tipos
            };
        });

        const saida: ListaJogoDto = {
            jogos,
        };

        return saida;
    }

    public async buscarPorId(idJogo: string): Promise<JogoDto> {
        const jogo = await this.repositorio.buscarPorId(idJogo);

        return jogo;
    }
}