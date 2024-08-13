// interface
import { Jogo } from "../../entidade/jogo";

export interface JogoRepositorio {
    cria(jogo: Jogo): Promise<void>;
    lista(): Promise<Jogo[]>;
    atualiza(jogo: Jogo): Promise<void>;
}