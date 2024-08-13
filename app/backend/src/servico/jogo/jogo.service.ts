// metodos para a aplicacao

export type CriaSaidaDto = {
    idJogo: string;
};

export type ListaSaidaDto = {
    jogos: {
        idJogo: string;
        nomeJogo: string;
        precoJogo: number;
    }[];
};


export interface JogoServico {
    lista(): Promise<ListaSaidaDto>;
    cria(nomeJogo: string, precoJogo: number): Promise<CriaSaidaDto>;
}