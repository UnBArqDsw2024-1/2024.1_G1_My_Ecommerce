// repository ---> persistencia

import { PrismaClient } from "@prisma/client";
import { Jogo } from "../../entidade/jogo";
import { DesenvolvedoraRepositorio } from "../desenvolvedora/desenvolvedora.repositorio";
import { EditoraRepositorio } from "../editora/editora.repositorio";
import { JogoRepositorio } from "./jogo.repositorio";


export class JogoRepositorioPrisma implements JogoRepositorio {
    private editoraRepositorio: EditoraRepositorio;
    private desenvolvedoraRepositorio: DesenvolvedoraRepositorio;

    private constructor(readonly prisma: PrismaClient, 
                        editoraRepositorio: EditoraRepositorio,
                        desenvolvedoraRepositorio: DesenvolvedoraRepositorio) {
        this.editoraRepositorio = editoraRepositorio;
        this.desenvolvedoraRepositorio = desenvolvedoraRepositorio;
    }

    public static build(prisma: PrismaClient, 
                         editoraRepositorio: EditoraRepositorio, 
                         desenvolvedoraRepositorio: DesenvolvedoraRepositorio) {
        return new JogoRepositorioPrisma(prisma, editoraRepositorio, desenvolvedoraRepositorio);
    }


    public async cria(jogo: Jogo): Promise<void> {
        const data = {
            idJogo: jogo.idJogo,
            nomeJogo: jogo.nomeJogo,
            precoJogo: jogo.precoJogo,
            descricao: jogo.descricao,
            dataLancamento: jogo.dataLancamento,
            dataLancamentoInicial: jogo.dataLancamentoInicial,
            desconto: jogo.desconto,
            quantidadeVendido: jogo.quantidadeVendido
        };

        await this.prisma.jogo.create({
            data,
        });
    }

    public async lista(): Promise<Jogo[]> {
        const aJogos = await this.prisma.jogo.findMany();

        const jogos: Jogo[] = await Promise.all(aJogos.map(async (j) => {
            const { idJogo, nomeJogo, precoJogo, descricao, dataLancamento, dataLancamentoInicial, desconto, quantidadeVendido, editoraId, desenvolvedoraId } = j;
            
            // Buscar o nome da editora usando a interface EditoraRepositorio
            const nomeEditora = editoraId ? await this.editoraRepositorio.busca(editoraId) : null;
            
            // Buscar o nome da desenvolvedora usando a interface DesenvolvedoraRepositorio
            const nomeDesenvolvedora = desenvolvedoraId ? await this.desenvolvedoraRepositorio.busca(desenvolvedoraId) : null;
            
            return Jogo.with(idJogo, nomeJogo, precoJogo, descricao, dataLancamento, dataLancamentoInicial, desconto, quantidadeVendido, nomeEditora ?? "", nomeDesenvolvedora ?? ""); 
        }));

        return jogos;
    }

    public async pesquisa(nomeJogo: string): Promise<Jogo[]> {
        // Buscar todos os jogos que correspondem ao nome fornecido, insensível a maiúsculas e minúsculas
        const aJogos = await this.prisma.jogo.findMany({
            where: {
                nomeJogo: {
                    contains: nomeJogo, // Busca por partes do nome
                    // Prisma geralmente realiza busca insensível a maiúsculas e minúsculas por padrão
                }
            }
        });
    
        // Se não encontrar nenhum jogo, retorna uma lista vazia
        if (aJogos.length === 0) return [];
    
        // Mapeia os resultados para o formato de Jogo
        const jogos = await Promise.all(aJogos.map(async (jogoDb) => {
            const { idJogo, precoJogo, descricao, dataLancamento, dataLancamentoInicial, desconto, quantidadeVendido, editoraId, desenvolvedoraId, nomeJogo } = jogoDb;
            
            // Buscar o nome da editora usando a interface EditoraRepositorio
            const nomeEditora = editoraId ? await this.editoraRepositorio.busca(editoraId) : "";
            
            // Buscar o nome da desenvolvedora usando a interface DesenvolvedoraRepositorio
            const nomeDesenvolvedora = desenvolvedoraId ? await this.desenvolvedoraRepositorio.busca(desenvolvedoraId) : "";
    
            return Jogo.with(idJogo, nomeJogo, precoJogo, descricao, dataLancamento, dataLancamentoInicial, desconto, quantidadeVendido, nomeEditora ?? "", nomeDesenvolvedora ?? "");
        }));
    
        return jogos;
    }
}
