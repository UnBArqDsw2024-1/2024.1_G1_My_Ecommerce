import { ApiExpress } from "./api/express/api.express";
import { JogoControladora } from "./api/express/controladora/jogo.controladora";

function main() {
    const api = ApiExpress.build();

    const controller = JogoControladora.build();

    api.addGetRoute("/jogos", controller.lista);
    api.addPostRoute("/jogos/cria", controller.cria);

    api.start(8000);
}

main();