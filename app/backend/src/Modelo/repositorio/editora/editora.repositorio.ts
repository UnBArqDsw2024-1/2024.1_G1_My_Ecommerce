// interface

export interface EditoraRepositorio {
    busca(idEditora: number): Promise<string | null>;
}