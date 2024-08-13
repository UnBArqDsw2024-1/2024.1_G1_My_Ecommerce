// metodos para a aplicacao

export type CriaSaidaDto = {
    idJogo: string;
};

export type ListaSaidaDto = {
    jogos: {
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
    }[];
};


export interface JogoServico {
    lista(): Promise<ListaSaidaDto>;
    cria(
        nomeJogo: string,
        precoJogo: number,
        descricao: string,
        dataLancamento: Date,
        dataLancamentoInicial: Date,
        desconto: number,
        quantidadeVendido: number,
        editora: string,
        desenvolvedora: string,
    ): Promise<CriaSaidaDto>;
}