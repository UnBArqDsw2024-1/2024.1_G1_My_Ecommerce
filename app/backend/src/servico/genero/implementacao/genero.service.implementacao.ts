// metodos do Jogo


import { GeneroRepositorio } from "../../../repositorio/genero/genero.repositorio";
import { BuscaSaidaDto, GeneroServico } from "../genero.service";


export class GeneroServicoImplementacao implements GeneroServico {

    private constructor(readonly repositorio: GeneroRepositorio){}

    public static build(repositorio: GeneroRepositorio){
        return new GeneroServicoImplementacao(repositorio);
    }

    public async busca(idGenero: number): Promise<BuscaSaidaDto | null>{
        const nomeGenero = await this.repositorio.busca(idGenero);

        if (!nomeGenero) {
            return null;
        }

        const saida: BuscaSaidaDto = {
            genero: {
                nomeGenero
            }
        }
        return saida;
    }

}