export class Avaliacao {
    private nomeUsuario: string;
    private horasJogadas: string;
    private nota: number; // {int 1...5}
    private comentario: string;
    private numCurtidas: number;

    constructor(
        nomeUsuario: string,
        horasJogadas: string,
        nota: number, // {int 1...5}
        comentario: string,
        numCurtidas: number
    ) {
        this.nomeUsuario = nomeUsuario;
        this.horasJogadas = horasJogadas;
        this.nota = this.validarNota(nota);
        this.comentario = comentario;
        this.numCurtidas = numCurtidas;
    }

    private validarNota(nota: number): number {
        if (!Number.isInteger(nota) || nota <= 1 || nota >= 5) {
            throw new Error("Nota deve ser de 1 a 5.");
        }
        return nota;
    }

    // Getters
    public get getNomeUsuario(): string {
        return this.nomeUsuario;
    }

    public get getHorasJogadas(): string {
        return this.horasJogadas;
    }

    public get getNota(): number {
        return this.nota;
    }

    public get getComentario(): string {
        return this.comentario;
    }

    public get getNumCurtidas(): number {
        return this.numCurtidas;
    }
}
