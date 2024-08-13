// recebe http

import { Request, Response } from "express";
import { DesenvolvedoraRepositorioPrisma } from "../../../Modelo/repositorio/desenvolvedora/desenvolvedora.repositorio.prisma";
import { EditoraRepositorioPrisma } from "../../../Modelo/repositorio/editora/editora.repositorio.prisma";
import { JogoRepositorioPrisma } from "../../../Modelo/repositorio/jogo/jogo.repositorio.prisma";
import { JogoServicoImplementacao } from "../../../Modelo/servico/jogo/jogo.service.implementacao";
import { prisma } from "../../../util/prisma.util";


export class JogoControladora {

    private constructor() {}

    public static build() {
        return new JogoControladora;
    }

    public async lista(request: Request, response: Response) {
        const editoraRepositorio = EditoraRepositorioPrisma.build(prisma);
        const desenvolvedoraRepositorio = DesenvolvedoraRepositorioPrisma.build(prisma);
        const aRepositorio = JogoRepositorioPrisma.build(prisma, editoraRepositorio, desenvolvedoraRepositorio);
        const aServico = JogoServicoImplementacao.build(aRepositorio);

        const saida = await aServico.lista();

        const data = {
            jogos: saida.jogos,
        };

        response.status(200).json(data).send();
    }

    public async pesquisa(request: Request, response: Response) {
        const { nomeJogo } = request.body; // Use request.body para POST

        if (typeof nomeJogo !== 'string') {
            response.status(400).json({ error: 'Nome do jogo deve ser uma string' }).send();
            return;
        }

        const editoraRepositorio = EditoraRepositorioPrisma.build(prisma);
        const desenvolvedoraRepositorio = DesenvolvedoraRepositorioPrisma.build(prisma);
        const aRepositorio = JogoRepositorioPrisma.build(prisma, editoraRepositorio, desenvolvedoraRepositorio);
        const aServico = JogoServicoImplementacao.build(aRepositorio);

        try {
            const saida = await aServico.pesquisa(nomeJogo);

            const data = {
                jogos: saida.jogos,
            };

            response.status(200).json(data).send();
        } catch (error) {
            response.status(500).json({ error: 'Erro ao pesquisar o jogo' }).send();
        }
    }

}