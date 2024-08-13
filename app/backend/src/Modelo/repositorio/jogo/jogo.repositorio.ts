// interface
import { Jogo } from "../../entidade/jogo";

export interface JogoRepositorio {
    lista(): Promise<Jogo[]>;
    cria(jogo: Jogo): Promise<void>;
    pesquisa(nomeJogo: string): Promise<Jogo[]>;
    // nomeEditora(idEditora: number): Promise<string | null>;
    // nomeDesenvolvedora(idDesenvolvedora: number): Promise<string | null>;
}