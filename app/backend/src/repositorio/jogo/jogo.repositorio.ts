// interface
import { Jogo } from "../../entidade/jogo";

export interface JogoRepositorio {
    lista(): Promise<Jogo[]>;
    // cria(jogo: Jogo): Promise<void>;
    // nomeEditora(idEditora: number): Promise<string | null>;
    // nomeDesenvolvedora(idDesenvolvedora: number): Promise<string | null>;
    // atualiza(jogo: Jogo): Promise<void>;
}