import { Avaliacao } from "./Avaliacao";
import { Evento, Genero, Plataforma, PrecoCategoria, Recurso, Tipo } from "./Enum.ts";

export class Jogo {
    private nome: string;
    private id: string;
    private desenvolvedor: string;
    private editora: string;
    private avaliacoes: Avaliacao[];
    private descricao: string;
    private dataLancamento: Date;
    private dataLancamentoInicial: Date;
    private preco: number;
    private desconto: number;
    private plataforma: Plataforma;
    private generos: Genero[];
    private recursos: Recurso[];
    private tipos: Tipo[];
    private eventos: Evento[];
    private precoCategorias: PrecoCategoria[];
    private quantidadeVendido: number;
    private requisitosSistema: Record<string, any>;
    // private observadores: ObservadorDesconto[];

    constructor(
        nome: string,
        id: string,
        desenvolvedor: string,
        editora: string,
        descricao: string,
        dataLancamento: Date,
        dataLancamentoInicial: Date,
        preco: number,
        desconto: number,
        plataforma: Plataforma,
        generos: Genero[],
        recursos: Recurso[],
        tipos: Tipo[],
        eventos: Evento[],
        quantidadeVendido: number,
        requisitosSistema: Record<string, any>
    ) {
        this.nome = nome;
        this.id = id;
        this.desenvolvedor = desenvolvedor;
        this.editora = editora;
        this.avaliacoes = [];
        this.descricao = descricao;
        this.dataLancamento = dataLancamento;
        this.dataLancamentoInicial = dataLancamentoInicial;
        this.preco = preco;
        this.desconto = desconto;
        this.plataforma = plataforma;
        this.generos = generos;
        this.recursos = recursos;
        this.tipos = tipos;
        this.eventos = eventos;
        this.updatePrecoCategoria();
        this.quantidadeVendido = quantidadeVendido;
        this.requisitosSistema = requisitosSistema;
        // this.observadores = [];
    }

    // public observar(observador: ObservadorDesconto): void {
    //     if (observador instanceof ObservadorDesconto) {
    //         this.observadores.push(observador);
    //     } else {
    //         throw new Error("Observador deve implementar a interface ObservadorDesconto.");
    //     }
    // }

    // public pararObservar(observador: ObservadorDesconto): void {
    //     this.observadores = this.observadores.filter(obs => obs !== observador);
    // }

    // private notificarObservadores(): void {
    //     this.observadores.forEach(observador => observador.atualizar(this, this.preco));
    // }

    // public setDesconto(percentualDesconto: number): void {
    //     const novoPreco = this.preco - (this.preco * (percentualDesconto / 100));
    //     this.preco = novoPreco;
    //     this.notificarObservadores();
    // }

    private updatePrecoCategoria(): void {
        this.precoCategorias = [];
        if (this.preco == 0) this.precoCategorias.push(PrecoCategoria.GRATUITO);
        if (this.preco < 40) this.precoCategorias.push(PrecoCategoria.ABAIXO_40);
        if (this.preco < 80) this.precoCategorias.push(PrecoCategoria.ABAIXO_80);
        if (this.preco < 120) this.precoCategorias.push(PrecoCategoria.ABAIXO_120);
        if (this.preco > 59) this.precoCategorias.push(PrecoCategoria.ACIMA_59);
        if (this.desconto > 0) this.precoCategorias.push(PrecoCategoria.COM_DESCONTO);
    }

    // Setters
    public set setDesconto(novoDesconto: number) {
        this.desconto = novoDesconto;
        this.updatePrecoCategoria();
    }

    public set setPreco(novoPreco: number) {
        this.preco = novoPreco;
        this.updatePrecoCategoria();
    }

    public set setQuantidadeVendido(quantidade: number) {
        this.quantidadeVendido += quantidade;
    }

    // Getters
    public get getNome(): string {
        return this.nome;
    }

    public get getId(): string {
        return this.id;
    }

    public get getDesenvolvedor(): string {
        return this.desenvolvedor;
    }

    public get getEditora(): string {
        return this.editora;
    }

    public get getAvaliacoes(): Avaliacao[] {
        return this.avaliacoes;
    }

    public get getPreco(): number {
        return this.preco;
    }

    public get getDescricao(): string {
        return this.descricao;
    }

    public get getDataLancamento(): Date {
        return this.dataLancamento;
    }

    public get getPlataforma(): Plataforma {
        return this.plataforma;
    }

    public get getGeneros(): Genero[] {
        return this.generos;
    }

    public get getRecursos(): Recurso[] {
        return this.recursos;
    }

    public get getTipos(): Tipo[] {
        return this.tipos;
    }

    public get getEventos(): Evento[] {
        return this.eventos;
    }

    public get getPrecoCategorias(): PrecoCategoria[] {
        return this.precoCategorias;
    }

    public get getQuantidadeVendido(): number {
        return this.quantidadeVendido;
    }

    public get getRequisitosSistema(): Record<string, any> {
        return this.requisitosSistema;
    }

    public get detPrecoComDesconto(): number {
        return this.desconto ? this.preco * this.desconto : this.preco;
    }

    public get getNota(): number {
        if (this.avaliacoes.length === 0) {
            return 5; // Se um jogo não tiver avaliações ele é 5 estrelas
        }
        return this.avaliacoes.reduce((total, avaliacao) => total + avaliacao.getNota, 0) / this.avaliacoes.length
    }
}


