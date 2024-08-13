// interface

export interface DesenvolvedoraRepositorio {
    busca(idDesenvolvedora: number): Promise<string | null>;
}