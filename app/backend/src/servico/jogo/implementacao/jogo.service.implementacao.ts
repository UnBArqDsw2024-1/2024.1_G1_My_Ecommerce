// metodos do Jogo

import { Jogo } from "../../../entidade/jogo";
import { JogoRepositorio } from "../../../repositorio/jogo/jogo.repositorio";
import { CriaSaidaDto, JogoServico, ListaSaidaDto } from "../jogo.service";

export class JogoServicoImplementacao implements JogoServico {

    private constructor(readonly repositorio: JogoRepositorio){}

    public static build(repositorio: JogoRepositorio){
        return new JogoServicoImplementacao(repositorio);
    }

    public async cria(nomeJogo: string, precoJogo: number): Promise<CriaSaidaDto> {

        const aJogo = Jogo.cria(nomeJogo, precoJogo);

        await this.repositorio.cria(aJogo);

        const saida: CriaSaidaDto = {
            idJogo: aJogo.idJogo
        };

        return saida;
    }

    public async lista(): Promise<ListaSaidaDto> {
        const aJogos = await this.repositorio.lista();
        // lista de produtos
        const jogos = aJogos.map((j)=>{
            return {
                idJogo: j.idJogo,
                nomeJogo: j.nomeJogo,
                precoJogo: Number(j.precoJogo),
            };
        });

        const saida: ListaSaidaDto = {
            jogos, 
        };

        return saida;
    }
}