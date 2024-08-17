import { PrismaClient } from '@prisma/client';
import { FormaPagamento } from '../entidade/formaPagamento';

export interface FormaPagamentoRepositorio {
    listar(): Promise<FormaPagamento[]>;
    salvar(formaPagamento: FormaPagamento): Promise<void>;
}

export class FormaPagamentoRepositorioPrisma implements FormaPagamentoRepositorio {
    constructor(private prisma: PrismaClient) {}

    

    async listar(): Promise<FormaPagamento[]> {
        // Implementar a lógica para listar os pagamentos do banco de dados
        return [];
    }

    async salvar(formaPagamento: FormaPagamento): Promise<void> {
        // Implementar a lógica para salvar um pagamento no banco de dados
    }
}