import { Usuario } from "./Usuario";

export class Admin extends Usuario {
    private telefone: string;
    private cpf: string; //string[11]

    constructor(nome: string, email: string, senha: string, telefone: string, cpf: string) {
        super(nome, email, senha);
        this.telefone = telefone;
        this.cpf = cpf;
    }

    // Métodos Abstratos herdados de Usuario
    public cadastrarUsuario(): void {
        // TODO: POST para o banco
        return;
    }

    public removerUsuario(): void {
        // TODO: DELETE para o banco
        return;
    }

    // Métodos Próprios
    public gerenciarUsuario(): void {
        // ???
        return;
    }

    public cadastrarJogo(): void {
        // TODO: POST para o banco
        return;
    }

    public gerenciaProdutos(): void {
        console.log("Gerenciar produtos");
    }
}