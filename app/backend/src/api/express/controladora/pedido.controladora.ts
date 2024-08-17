import { Request, Response } from "express";
import { StatusPedido } from "../../../Modelo/entidade/pedido";
import { PedidoRepositorioPrisma } from "../../../Modelo/repositorio/pedido.repositorio";
import { PedidoServicoImplementacao } from "../../../Modelo/servico/pedido.service.implentacao";
import { prisma } from "../../../util/prisma.util";

export class PedidoControladora {

    private constructor() {}

    public static build() {
        return new PedidoControladora();
    }

    public async alterarStatusPedido(request: Request, response: Response): Promise<void> {
        const { idPedido, status } = request.body;

        if (typeof idPedido !== 'number') {
            response.status(400).json({ error: 'ID do pedido deve ser um número' });
            return;
        }

        if (!Object.values(StatusPedido).includes(status)) {
            response.status(400).json({ error: 'Status inválido' });
            return;
        }

        try {
            const pedidoRepositorio = PedidoRepositorioPrisma.build(prisma);
            const pedidoServico = PedidoServicoImplementacao.build(pedidoRepositorio);

            await pedidoServico.alterarStatusPedido(idPedido, status);

            response.status(200).json({ message: 'Status do pedido alterado com sucesso' });
        } catch (error) {
            console.error("Erro ao alterar status do pedido:", error);
            response.status(500).json({ error: 'Erro ao alterar status do pedido' });
        }
    }

    public async addCarrinho(request: Request, response: Response): Promise<void> {
        const { clienteId, jogoId } = request.body;
    
        if (typeof clienteId !== 'string' || typeof jogoId !== 'string') {
            response.status(400).json({ error: 'clienteId e jogoId devem ser strings' });
            return;
        }
    
        try {
            const possuiJogo = await prisma.pedido.findFirst({
                where: {
                    clienteId: clienteId,
                    jogoId: jogoId,
                    status: StatusPedido.Pago,
                },
            });
    
            if (possuiJogo) {
                console.log('Cliente já possui o jogo')
                response.status(400).json({ error: 'Cliente já possui o jogo' });
                return;
            }
    
            const pedidoRepositorio = PedidoRepositorioPrisma.build(prisma);
            const pedidoServico = PedidoServicoImplementacao.build(pedidoRepositorio);
    
            const clienteExiste = await prisma.cliente.findUnique({
                where: { idCliente: clienteId },
            });
    
            if (!clienteExiste) {
                response.status(404).json({ error: 'Cliente não encontrado' });
                return;
            }
    
            const jogoExiste = await prisma.jogo.findUnique({
                where: { idJogo: jogoId },
            });
    
            if (!jogoExiste) {
                response.status(404).json({ error: 'Jogo não encontrado' });
                return;
            }
    
            await pedidoServico.addCarrinho(clienteId, jogoId);
    
            response.status(200).json({ message: `Jogo: ${jogoId} - Adicionado ao carrinho do ${clienteId}` });
        } catch (error) {
            console.error("Erro ao adicionar jogo no carrinho:", error);
            response.status(500).json({ error: 'Erro ao adicionar jogo no carrinho' });
        }
    }

    public async listarPorStatusCliente(request: Request, response: Response): Promise<void> {
        const { status, clienteId } = request.body;

        if (typeof status !== 'string' || typeof clienteId !== 'string') {
            response.status(400).json({ error: 'status e clienteId devem ser strings' });
            return;
        }

        if (!Object.values(StatusPedido).includes(status as StatusPedido)) {
            response.status(400).json({ error: 'Status inválido' });
            return;
        }

        try {
            const pedidoRepositorio = PedidoRepositorioPrisma.build(prisma);
            const pedidoServico = PedidoServicoImplementacao.build(pedidoRepositorio);

            const idsJogos = await pedidoServico.listarPorStatusCliente(status as StatusPedido, clienteId);
            response.status(200).json({ idsJogos });
        } catch (error) {
            console.error("Erro ao listar IDs dos jogos por status e cliente:", error);
            response.status(500).json({ error: 'Erro ao listar IDs dos jogos por status e cliente' });
        }
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

    // public async confirmarPagamento(request: Request, response: Response): Promise<void> {
    //     const { idPedido } = request.body;

    //     if (typeof idPedido !== 'number') {
    //         response.status(400).json({ error: 'ID do pedido deve ser um número' });
    //         return;
    //     }

    //     try {
    //         const pedidoRepositorio = PedidoRepositorioPrisma.build(prisma);
    //         const pedidoServico = PedidoServicoImplementacao.build(pedidoRepositorio);

    //         await pedidoServico.confirmarPagamento(idPedido);

    //         response.status(200).json({ message: 'Pagamento confirmado com sucesso' });
    //     } catch (error) {
    //         console.error("Erro ao confirmar pagamento:", error);
    //         response.status(500).json({ error: 'Erro ao confirmar pagamento' });
    //     }
    // }

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
