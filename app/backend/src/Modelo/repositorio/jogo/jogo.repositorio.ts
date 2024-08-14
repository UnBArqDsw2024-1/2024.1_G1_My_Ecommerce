// interface
import { Jogo } from "../../entidade/jogo";

export interface JogoRepositorio {
    lista(): Promise<Jogo[]>;
    pesquisarPorNome(nomeJogo: string): Promise<Jogo[]>;
    // filtrar(genero: string,recurso:string, tipo:string, plataforma:string): Promise<Jogo[]>
}