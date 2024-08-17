import { Request, Response } from "express";
import { ClienteRepositorioPrisma } from "../../../Modelo/repositorio/cliente.repositorio";
import { ClienteServicoImplementacao } from "../../../Modelo/servico/cliente.service.implentacao";

import { prisma } from "../../../util/prisma.util"; // Ajuste o caminho conforme necessário

export class ClienteControladora {

    private constructor() {}

    public static build() {
        return new ClienteControladora();
    }

    public async listar(request: Request, response: Response) {
        try {
            const clienteRepositorio = ClienteRepositorioPrisma.build(prisma);
            const clienteServico = ClienteServicoImplementacao.build(clienteRepositorio);

            const saida = await clienteServico.listar();

            const data = {
                clientes: saida.clientes,
            };

            response.status(200).json(data);
        } catch (error) {
            console.error("Erro ao listar clientes:", error);
            response.status(500).json({ error: 'Erro ao listar clientes' });
        }
    }

    // public async cadastrar(request: Request, response: Response) {
    //     try {
    //         const { idCliente, nomeExibicao, dataNascimento, nome, email, senha, paisId } = request.body;

    //         // Verifique se todos os campos obrigatórios estão presentes
    //         if (!idCliente || !nomeExibicao || !dataNascimento || !nome || !email || !senha) {
    //             return response.status(400).json({ error: "Todos os campos são obrigatórios" });
    //         }

    //         // Converta dataNascimento para Date
    //         const dataNascimentoDate = new Date(dataNascimento);
    //         if (isNaN(dataNascimentoDate.getTime())) {
    //             return response.status(400).json({ error: "Data de nascimento inválida" });
    //         }

    //         const clienteServico = new ClienteServicoImplementacao(prisma);
    //         const result = await clienteServico.cadastrar(idCliente, nomeExibicao, dataNascimentoDate, nome, email, senha, paisId);

    //         response.status(201).json(result);
    //         console.log(request.body);
    //     } catch (error) {
    //         console.error("Erro ao cadastrar cliente:", error);
    //         response.status(500).json({ error: "Erro ao cadastrar cliente" });
    //         console.log(request.body)
    //     }
    // }

    public async logar(request: Request, response: Response) {
        try {
            const { email, senha } = request.body;

            if (!email || !senha) {
                return response.status(400).json({ error: "Email e senha são obrigatórios" });
            }

            const clienteRepositorio = ClienteRepositorioPrisma.build(prisma);
            const clienteServico = ClienteServicoImplementacao.build(clienteRepositorio);

            const resultado = await clienteServico.logar(email, senha);

            if (!resultado.sucesso) {
                return response.status(401).json({ error: resultado.mensagem });
            }

            response.status(200).json({ mensagem: resultado.mensagem });
        } catch (error) {
            console.error("Erro ao fazer login:", error);
            response.status(500).json({ error: 'Erro ao fazer login' });
        }
    }
}
