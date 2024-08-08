import { FormaPagamento } from "./FormaPagamento";

export class Pix extends FormaPagamento {
  private chavePix: string;

  constructor(
    chavePix: string,
    dataVencimento: Date
  ) {
    super(dataVencimento);
    this.chavePix = chavePix;
    // this.chavePix = Math.floor(Math.random() * 100000000000000);
  }

  // Métodos Sobrescritos de FormaPagamento
  public cancelarPagamento(): void {
    // Implementar Lógica
    return;
  }

  public confirmarPagamento(): void {
    // Implementar Lógica
    return;
  }

  public gerarQRCode() {
    // Implementar Lógica  
    return;
  }
}