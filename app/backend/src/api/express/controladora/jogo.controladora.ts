// recebe http

import { Request, Response } from "express";
import { DesenvolvedoraRepositorioPrisma } from "../../../repositorio/desenvolvedora/prisma/desenvolvedora.repositorio.prisma";
import { EditoraRepositorioPrisma } from "../../../repositorio/editora/prisma/editora.repositorio.prisma";
import { JogoRepositorioPrisma } from "../../../repositorio/jogo/prisma/jogo.repositorio.prisma";
import { JogoServicoImplementacao } from "../../../servico/jogo/implementacao/jogo.service.implementacao";
import { prisma } from "../../../util/prisma.util";


export class JogoControladora {

    private constructor() {}

    public static build() {
        return new JogoControladora;
    }

    // public async cria(request: Request, response: Response){
    //     const {
    //         nomeJogo, 
    //         precoJogo,
    //         descricao, 
    //         dataLancamento, 
    //         dataLancamentoInicial, 
    //         desconto, 
    //         quantidadeVendido
    //     } = request.body;

    //     const aRepositorio = JogoRepositorioPrisma.build(prisma);
    //     const aServico = JogoServicoImplementacao.build(aRepositorio);

    //     const saida = await aServico.cria(
    //         nomeJogo, 
    //         precoJogo,
    //         descricao, 
    //         dataLancamento, 
    //         dataLancamentoInicial, 
    //         desconto, 
    //         quantidadeVendido
    //     );

    //     const data = {
    //         idJogo: saida.idJogo,
    //         nomeJogo,
    //         precoJogo,
    //         descricao, 
    //         dataLancamento, 
    //         dataLancamentoInicial, 
    //         desconto, 
    //         quantidadeVendido
    //     }

    //     response.status(201).json(data).send();
    // }

    // public async lista(request: Request, response: Response) {
    //     const aRepositorio = JogoRepositorioPrisma.build(prisma);
    //     const aServico = JogoServicoImplementacao.build(aRepositorio);

    //     const saida = await aServico.lista();

    //     const data = {
    //         jogos: saida.jogos,
    //     };

    //     response.status(200).json(data).send();
    // }
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