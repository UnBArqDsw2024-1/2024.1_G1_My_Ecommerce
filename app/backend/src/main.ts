import { ApiExpress } from "./api/express/api.express";
import { ClienteControladora } from "./api/express/controladora/cliente.controladora";
import { JogoControladora } from "./api/express/controladora/jogo.controladora";

function main() {
    const api = ApiExpress.build();

    const controllerJogo = JogoControladora.build();
    const controllerCliente = ClienteControladora.build();

    api.addGetRoute("/jogos", controllerJogo.lista);
    api.addPostRoute("/jogos/pesquisa", controllerJogo.pesquisarPorNome);
    api.addGetRoute("/clientes", controllerCliente.listar);
    // api.addPostRoute("/clientes/cadastrar", controllerCliente.cadastrar);
    api.addPostRoute("/clientes/logar", controllerCliente.logar);

    api.start(8000);
}

main();