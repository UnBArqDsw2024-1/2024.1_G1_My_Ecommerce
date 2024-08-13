export type BuscaSaidaDto = {
    genero: {
        nomeGenero: string;
    };

}

export interface GeneroServico {
    busca(idGenero: number): Promise<BuscaSaidaDto | null>
}
