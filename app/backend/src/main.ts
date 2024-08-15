import { ApiExpress } from "./api/express/api.express";
import { ClienteControladora } from "./api/express/controladora/cliente.controladora";
import { JogoControladora } from "./api/express/controladora/jogo.controladora";
import { PedidoControladora } from "./api/express/controladora/pedido.controladora";

function main() {
    const api = ApiExpress.build();

    const controllerJogo = JogoControladora.build();
    const controllerCliente = ClienteControladora.build();
    const controllerPedido = PedidoControladora.build();

    api.addGetRoute("/", controllerJogo.lista);
    api.addPostRoute("/jogos/pesquisa", controllerJogo.pesquisarPorNome);
    api.addPostRoute("/jogos/buscarPorId", controllerJogo.buscarPorId);
    api.addGetRoute("/clientes", controllerCliente.listar);
    api.addPostRoute("/clientes/logar", controllerCliente.logar);
    // api.addPostRoute("/pedido/carrinho", controllerPedido.confirmarPedido);
    api.addPostRoute("/pedido/comprar", controllerPedido.confirmarPedido);
    api.addPostRoute("/pedido/biblioteca", controllerPedido.confirmarPagamento);


    api.start(8000);
}

main();