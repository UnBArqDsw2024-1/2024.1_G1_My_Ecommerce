// metodos do Jogo

import { JogoRepositorio } from "../../repositorio/jogo/jogo.repositorio";
import { JogoServico, ListaSaidaDto, PesquisaSaidaDto } from "./jogo.service";

export class JogoServicoImplementacao implements JogoServico {

    private constructor(readonly repositorio: JogoRepositorio){}

    public static build(repositorio: JogoRepositorio){
        return new JogoServicoImplementacao(repositorio);
    }

    public async lista(): Promise<ListaSaidaDto> {
        const aJogos = await this.repositorio.lista();
        // lista de produtos
        const jogos = aJogos.map((j)=>{
            return {
                idJogo: j.idJogo,
                nomeJogo: j.nomeJogo,
                precoJogo: j.precoJogo,
                descricao: j.descricao,
                dataLancamento: j.dataLancamento,
                dataLancamentoInicial: j.dataLancamentoInicial,
                desconto: j.desconto,
                quantidadeVendido: j.quantidadeVendido,
                editora: j.editora,
                desenvolvedora: j.desenvolvedora,
            };
        });

        const saida: ListaSaidaDto = {
            jogos, 
        };

        return saida;
    }

    public async pesquisa(nomeJogo: string): Promise<PesquisaSaidaDto> {
        const aJogos = await this.repositorio.pesquisa(nomeJogo);
        // lista de produtos
        const jogos = aJogos.map((j)=>{
            return {
                idJogo: j.idJogo,
                nomeJogo: j.nomeJogo,
                precoJogo: j.precoJogo,
                descricao: j.descricao,
                dataLancamento: j.dataLancamento,
                dataLancamentoInicial: j.dataLancamentoInicial,
                desconto: j.desconto,
                quantidadeVendido: j.quantidadeVendido,
                editora: j.editora,
                desenvolvedora: j.desenvolvedora,
            };
        });

        const saida: ListaSaidaDto = {
            jogos, 
        };

        return saida;
    }

}