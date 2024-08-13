// interface

export interface GeneroRepositorio {
    busca(idGenero: number): Promise<string | null>;
}