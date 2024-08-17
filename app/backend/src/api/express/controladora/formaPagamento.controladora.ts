// formaPagamentoControladora.ts
import { Request, Response } from 'express';

export class FormaPagamentoControladora {

    private constructor() {}

    public static build() { return new FormaPagamentoControladora();}

    public async lista(request: Request, response: Response): Promise<void> {
    }

    public async criar(request: Request, response: Response): Promise<void> {
    }

    public async atualizar(request: Request, response: Response): Promise<void> {
        
    }

    // private criarFormaPagamento(data: any): FormaPagamento {
    //     // Implementar a lógica para criar a instância correta de FormaPagamento
    //     // Exemplo: new Pix(new Date());
    //     // return new Pix(new Date()); // Substitua pelo tipo correto conforme a necessidade
    // }
}
