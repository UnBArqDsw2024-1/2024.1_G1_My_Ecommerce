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

    public async cria(request: Request, response: Response){
        const {
            nomeJogo, 
            precoJogo,
            descricao, 
            dataLancamento, 
            dataLancamentoInicial, 
            desconto, 
            quantidadeVendido,
            desenvolvedora,
            editora
        } = request.body;

        const aEditora = editora;
        const aDesenvolvedora = desenvolvedora;
        const aRepositorio = JogoRepositorioPrisma.build(prisma,aEditora,aDesenvolvedora);
        const aServico = JogoServicoImplementacao.build(aRepositorio);

        const saida = await aServico.cria(
            nomeJogo, 
            precoJogo,
            descricao, 
            dataLancamento, 
            dataLancamentoInicial, 
            desconto, 
            quantidadeVendido,
            desenvolvedora,
            editora
        );

        const data = {
            idJogo: saida.idJogo,
            nomeJogo,
            precoJogo,
            descricao, 
            dataLancamento, 
            dataLancamentoInicial, 
            desconto, 
            quantidadeVendido,
            desenvolvedora,
            editora
        }

        response.status(201).json(data).send();
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

}