import { PrismaClient } from "@prisma/client";
import { Jogo } from "../../../entidade/jogo";
import { DesenvolvedoraRepositorio } from "../../desenvolvedora/desenvolvedora.repositorio";
import { EditoraRepositorio } from "../../editora/editora.repositorio";
import { JogoRepositorio } from "../jogo.repositorio";


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
}
