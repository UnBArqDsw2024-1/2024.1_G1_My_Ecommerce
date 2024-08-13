// interface
import { Jogo } from "../../entidade/jogo";

export interface JogoRepositorio {
    lista(): Promise<Jogo[]>;
    pesquisa(nomeJogo: string): Promise<Jogo[]>;
}