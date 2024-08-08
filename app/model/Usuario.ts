export abstract class Usuario {
    private nome: string;
    private email: string;
    private senha: string;

    constructor(nome: string, email: string, senha: string) {
        this.nome = nome;
        this.email = email;
        this.senha = senha;
    }

    // Métodos Abstratos
    public cadastrarUsuario(): void {
        // TODO: POST pro banco
        return;
    }
    public removerUsuario(): void {
        // TODO: DELETE pro banco
        return;
    }
}