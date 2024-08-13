import { FormaPagamento } from "./FormaPagamento";

export class Pix extends FormaPagamento {
  private chavePix: string;

  constructor(
    chavePix: string,
    dataVencimento: Date
  ) {
    super(dataVencimento);
    this.chavePix = chavePix;
  }

  // Métodos Sobrescritos de FormaPagamento
  public cancelarPagamento(): string {
    return "Pagamento em Pix cancelado!";
  }

  public confirmarPagamento(): string {
    return "Pagamento em Pix confirmado";
  }

  public gerarPixCopiaECola(): string
   {
    const pixCopiaECola = Math.floor(Math.random() * 10**50).toString(36);        
    
    return pixCopiaECola;
  }

  // Setters
  public set setChavePix(chavePix: string) {
    this.chavePix = Math.floor(Math.random() * 10**30).toString(36);
  }

  public set setDataVencimento(dataVencimento: Date) {
    this.dataVencimento = dataVencimento;
  }

  // Getters
  public get getChavePix(): string {
    return this.chavePix;
  }

  public get getDataVencimento(): Date {
    return this.dataVencimento;
  }

}