import { Request, Response } from "express";
import { JogoRepositorioPrisma } from "../../../Modelo/repositorio/jogo/jogo.repositorio.prisma";
import { JogoServicoImplementacao } from "../../../Modelo/servico/jogo/jogo.service.implementacao";
import { prisma } from "../../../util/prisma.util";

export class JogoControladora {

    private constructor() {}

    public static build() {
        return new JogoControladora();
    }

    public async lista(request: Request, response: Response) {
        try {
            const jogoRepositorio = JogoRepositorioPrisma.build(prisma);
            const jogoServico = JogoServicoImplementacao.build(jogoRepositorio);

            const saida = await jogoServico.lista();

            const data = {
                jogos: saida.jogos,
            };

            response.status(200).json(data);
        } catch (error) {
            console.error("Erro ao listar jogos:", error);
            response.status(500).json({ error: 'Erro ao listar jogos' });
        }
    }

    public async pesquisarPorNome(request: Request, response: Response): Promise<void> {
        const { nomeJogo } = request.body;

        if (typeof nomeJogo !== 'string') {
            response.status(400).json({ error: 'Nome do jogo deve ser uma string' });
            return;
        }

        try {
            // Construir repositórios e serviço
            const jogoRepositorio = JogoRepositorioPrisma.build(prisma);
            const jogoServico = JogoServicoImplementacao.build(jogoRepositorio);

            // Chamar o serviço para pesquisar por nome
            const saida = await jogoServico.pesquisarPorNome(nomeJogo);

            // Retornar a resposta com os dados dos jogos
            response.status(200).json({
                jogos: saida.jogos,
            });
        } catch (error) {
            console.error("Erro ao pesquisar jogo:", error);
            response.status(500).json({ error: 'Erro ao pesquisar o jogo' });
        }
    }
}
