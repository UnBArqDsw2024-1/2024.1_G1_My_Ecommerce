// formaPagamentoServico.ts
import { FormaPagamento } from '../entidade/formaPagamento';
import { FormaPagamentoRepositorio } from '../repositorio/formaPagamento.repositorio';

export interface FormaPagamentoServico {
    listar(): Promise<FormaPagamento[]>;
    salvar(formaPagamento: FormaPagamento): Promise<void>;
}


export class FormaPagamentoServicoImplementcao implements FormaPagamentoServico {
    private constructor(private repositorio: FormaPagamentoRepositorio) {}

    public static build(repositorio: FormaPagamentoRepositorio): FormaPagamentoServicoImplementcao {
        return new FormaPagamentoServicoImplementcao(repositorio);
    }

    public async listar(): Promise<FormaPagamento[]> {
        return this.repositorio.listar();
    }

    public async salvar(formaPagamento: FormaPagamento): Promise<void> {
        await this.repositorio.salvar(formaPagamento);
    }
}
