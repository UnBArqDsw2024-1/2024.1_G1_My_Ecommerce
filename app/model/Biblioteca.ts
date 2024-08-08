import { Jogo } from "./Jogo.ts";
import { Plataforma } from "./Plataforma";
import { Genero } from "./Genero";
import { Recurso } from "./Recurso";
import { Tipo } from "./Tipo";
import { Evento } from "./Evento";
import { PrecoCategoria } from "./PrecoCategoria";

export class Biblioteca {
    private jogosPossuidos: Jogo[];
    private instalados: string[];
    private favoritos: string[];

    // TODO: Talvez checar a possibilidade de fazer um GET no banco pra cada jogo??


    constructor() {
        this.jogosPossuidos = [];
        this.instalados = [];
        this.favoritos = [];
    }

    // Metodos
    public listarIntalados(): Jogo[] {
        console.log("Listando os jogos Instalados");
        const resultados = this.jogosPossuidos;
        return resultados;
    }

    public listarFavoritos(): Jogo[] {
        console.log("Listando os jogos Favoritos");
        const resultados = this.jogosPossuidos.filter(jogo => this.favoritos.includes(jogo.getNome));
        return resultados;
    }

    public pesquisarJogosPorNome(nome: string): Jogo[] {
        return this.jogosPossuidos.filter(
            jogo => jogo.getNome.toLowerCase().includes(nome.toLowerCase())
        );
    }

    public getJogosFiltrados(
        precoCategoria?: PrecoCategoria,
        genero?: Genero,
        recurso?: Recurso,
        evento?: Evento,
        tipo?: Tipo,
        plataforma?: Plataforma
    ): Jogo[] {
        return this.jogosPossuidos.filter(jogo => {
            return (
                (precoCategoria === undefined || jogo.getPrecoCategorias.includes(precoCategoria)) &&
                (genero === undefined || jogo.getGeneros.includes(genero)) &&
                (recurso === undefined || jogo.getRecursos.includes(recurso)) &&
                (evento === undefined || jogo.getEventos.includes(evento)) &&
                (tipo === undefined || jogo.getTipos.includes(tipo)) &&
                (plataforma === undefined || jogo.getPlataforma === plataforma)
            );
        });
    }

    // Getters
    public get getJogosPossuidos(): Jogo[] {
        return this.jogosPossuidos;
    }
}