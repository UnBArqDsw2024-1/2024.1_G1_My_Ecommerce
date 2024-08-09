import { Evento, Genero, Plataforma, PrecoCategoria, Recurso, Tipo } from "./Enum.ts";
import { Jogo } from './Jogo';

export class Catalogo {
    private static instance: Catalogo | null = null;
    private jogos: Jogo[];

    private constructor() {
        // TODO: Aqui vem um GET do Banco de Dados com o Catalogo e cadastrar o retorno no array abaixo
        this.jogos = [];
    }

    // GOF Singleton
    public static getInstance(): Catalogo {
        if (!Catalogo.instance) {
            Catalogo.instance = new Catalogo();
        }
        return Catalogo.instance;
    }

    // Metodos
    public pesquisarJogosPorNome(nome: string): Jogo[] {
        return this.jogos.filter(
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
        return this.jogos.filter(jogo => {
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

    public getJogosPorIds(ids: string[]): Jogo[] {
        return ids.map(id => this.jogos
            .find(jogo => jogo.getId === id))
            .filter(jogo => jogo !== undefined) as Jogo[];
    }

    // Getters
    public get getJogos(): Jogo[] {
        return this.jogos;
    }

    // Setters
    public set setJogos(novoJogo: Jogo) {
        // TODO: Aqui entraria uma validação para apenas o admin poder fazer essa operação
        // TODO: PUT do novoJogo no Banco de Dados
        this.jogos.push(novoJogo);
    }
}