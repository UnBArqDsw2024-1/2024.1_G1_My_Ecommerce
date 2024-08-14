import { PrismaClient } from "@prisma/client";
import { Jogo } from "../../entidade/jogo";
import { JogoRepositorio } from "./jogo.repositorio";

export class JogoRepositorioPrisma implements JogoRepositorio {
    private constructor(readonly prisma: PrismaClient) {}
    
    public static build(prisma: PrismaClient) {
        return new JogoRepositorioPrisma(prisma);
    }
    
    public async lista(): Promise<Jogo[]> {
        // Buscar todos os jogos com suas relações
        const aJogos = await this.prisma.jogo.findMany({
            include: {
                editora: { select: { nomeEditora: true } },
                desenvolvedora: { select: { nomeDesenvolvedora: true } },
                RecursoJogo: {
                    include: {
                        recurso: { select: { nomeRecurso: true } }
                    }
                },
                GeneroJogo: {
                    include: {
                        genero: { select: { nomeGenero: true } }
                    }
                },
                TipoJogo: {
                    include: {
                        tipo: { select: { nomeTipo: true } }
                    }
                }
            }
        });
    
        // Mapear os jogos para a estrutura esperada na classe Jogo
        const jogos: Jogo[] = aJogos.map((j) => {
            const {
                idJogo,
                nomeJogo,
                precoJogo,
                descricao,
                dataLancamento,
                dataLancamentoInicial,
                desconto,
                quantidadeVendido,
                plataforma,
                imagemCaminho,
                editora,
                desenvolvedora,
                RecursoJogo,
                GeneroJogo,
                TipoJogo
            } = j;
    
            return Jogo.with(
                idJogo,
                nomeJogo,
                precoJogo,
                descricao,
                dataLancamento,
                dataLancamentoInicial,
                desconto,
                quantidadeVendido,
                plataforma,
                imagemCaminho,
                editora?.nomeEditora, 
                desenvolvedora?.nomeDesenvolvedora,
                GeneroJogo.map(gj => gj.genero.nomeGenero),
                RecursoJogo.map(rj => rj.recurso.nomeRecurso),
                TipoJogo.map(tj => tj.tipo.nomeTipo)
            );
        });
    
        return jogos;
    }

    public async pesquisarPorNome(nomeJogo: string): Promise<Jogo[]> {
        // Buscar todos os jogos que correspondem ao nome fornecido, insensível a maiúsculas e minúsculas
        const aJogos = await this.prisma.jogo.findMany({
            where: { nomeJogo: { contains: nomeJogo }},
            include: {
                editora: { select: { nomeEditora: true } },
                desenvolvedora: { select: { nomeDesenvolvedora: true } },
                RecursoJogo: {
                    include: {
                        recurso: { select: { nomeRecurso: true } }
                    }
                },
                GeneroJogo: {
                    include: {
                        genero: { select: { nomeGenero: true } }
                    }
                },
                TipoJogo: {
                    include: {
                        tipo: { select: { nomeTipo: true } }
                    }
                }
            }
        });
    
        // Se não encontrar nenhum jogo, retorna uma lista vazia
        if (aJogos.length === 0) return [];
    
        // Mapeia os resultados para o formato de Jogo
        const jogos = aJogos.map((j) => {
            const {
                idJogo,
                nomeJogo,
                precoJogo,
                descricao,
                dataLancamento,
                dataLancamentoInicial,
                desconto,
                quantidadeVendido,
                plataforma,
                imagemCaminho,
                editora,
                desenvolvedora,
                RecursoJogo,
                GeneroJogo,
                TipoJogo
            } = j;
    
            return Jogo.with(
                idJogo,
                nomeJogo,
                precoJogo,
                descricao,
                dataLancamento,
                dataLancamentoInicial,
                desconto,
                quantidadeVendido,
                plataforma,
                imagemCaminho,
                editora?.nomeEditora ?? "",
                desenvolvedora?.nomeDesenvolvedora ?? "",
                GeneroJogo.map(gj => gj.genero.nomeGenero),
                RecursoJogo.map(rj => rj.recurso.nomeRecurso),
                TipoJogo.map(tj => tj.tipo.nomeTipo)
            );
        });
    
        return jogos;
    }
    
}
