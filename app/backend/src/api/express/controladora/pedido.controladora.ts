import { Request, Response } from "express";
import { PedidoRepositorioPrisma } from "../../../Modelo/repositorio/pedido.repositorio";
import { PedidoServicoImplementacao } from "../../../Modelo/servico/pedido.service.implentacao";
import { prisma } from "../../../util/prisma.util";

export class PedidoControladora {

    private constructor() {}

    public static build() {
        return new PedidoControladora();
    }

    // public async listarPorStatus(request: Request, response: Response): Promise<void> {
    //     const { status } = request.query;

    //     if (typeof status !== 'string') {
    //         response.status(400).json({ error: 'Status deve ser uma string' });
    //         return;
    //     }

    //     try {
    //         const pedidoRepositorio = PedidoRepositorioPrisma.build(prisma);
    //         const pedidoServico = PedidoServicoImplementacao.build(pedidoRepositorio);

    //         const saida = await pedidoServico.listarPorStatus(status);

    //         response.status(200).json(saida);
    //     } catch (error) {
    //         console.error("Erro ao listar pedidos por status:", error);
    //         response.status(500).json({ error: 'Erro ao listar pedidos por status' });
    //     }
    // }

    // public async addBiblioteca(request: Request, response: Response): Promise<void> {
    //     const { idPedido } = request.body;

    //     if (typeof idPedido !== 'number') {
    //         response.status(400).json({ error: 'ID do pedido deve ser um número' });
    //         return;
    //     }

    //     try {
    //         const pedidoRepositorio = PedidoRepositorioPrisma.build(prisma);
    //         const pedidoServico = PedidoServicoImplementacao.build(pedidoRepositorio);

    //         await pedidoServico.addBiblioteca(idPedido);

    //         response.status(200).json({ message: 'Biblioteca adicionada com sucesso' });
    //     } catch (error) {
    //         console.error("Erro ao adicionar biblioteca:", error);
    //         response.status(500).json({ error: 'Erro ao adicionar biblioteca' });
    //     }
    // }
    public async confirmarPedido(request: Request, response: Response): Promise<void> {
        const { idPedido } = request.body;

        if (typeof idPedido !== 'number') {
            response.status(400).json({ error: 'ID do pedido deve ser um número' });
            return;
        }

        try {
            const pedidoRepositorio = PedidoRepositorioPrisma.build(prisma);
            const pedidoServico = PedidoServicoImplementacao.build(pedidoRepositorio);

            await pedidoServico.confirmarPedido(idPedido);

            response.status(200).json({ message: 'Pedido confirmado com sucesso' });
        } catch (error) {
            console.error("Erro ao confirmar pedido:", error);
            response.status(500).json({ error: 'Erro ao confirmar pedido' });
        }
    }

    public async confirmarPagamento(request: Request, response: Response): Promise<void> {
        const { idPedido } = request.body;

        if (typeof idPedido !== 'number') {
            response.status(400).json({ error: 'ID do pedido deve ser um número' });
            return;
        }

        try {
            const pedidoRepositorio = PedidoRepositorioPrisma.build(prisma);
            const pedidoServico = PedidoServicoImplementacao.build(pedidoRepositorio);

            await pedidoServico.confirmarPagamento(idPedido);

            response.status(200).json({ message: 'Pagamento confirmado com sucesso' });
        } catch (error) {
            console.error("Erro ao confirmar pagamento:", error);
            response.status(500).json({ error: 'Erro ao confirmar pagamento' });
        }
    }

    // public async gerarRecibo(request: Request, response: Response): Promise<void> {
    //     const { idPedido } = request.body;

    //     if (typeof idPedido !== 'number') {
    //         response.status(400).json({ error: 'ID do pedido deve ser um número' });
    //         return;
    //     }

    //     try {
    //         const pedidoRepositorio = PedidoRepositorioPrisma.build(prisma);
    //         const pedidoServico = PedidoServicoImplementacao.build(pedidoRepositorio);

    //         await pedidoServico.gerarRecibo(idPedido);

    //         response.status(200).json({ message: 'Recibo gerado com sucesso' });
    //     } catch (error) {
    //         console.error("Erro ao gerar recibo:", error);
    //         response.status(500).json({ error: 'Erro ao gerar recibo' });
    //     }
    // }

    // public async enviarRecibo(request: Request, response: Response): Promise<void> {
    //     const { email } = request.body;

    //     if (typeof email !== 'string') {
    //         response.status(400).json({ error: 'Email deve ser uma string' });
    //         return;
    //     }

    //     try {
    //         const pedidoRepositorio = PedidoRepositorioPrisma.build(prisma);
    //         const pedidoServico = PedidoServicoImplementacao.build(pedidoRepositorio);

    //         await pedidoServico.enviarRecibo(email);

    //         response.status(200).json({ message: 'Recibo enviado com sucesso' });
    //     } catch (error) {
    //         console.error("Erro ao enviar recibo:", error);
    //         response.status(500).json({ error: 'Erro ao enviar recibo' });
    //     }
    // }

}
