import { ClienteRepositorio } from "../../repositorio/cliente/cliente.repositorio";
import { ClienteServico, ListarSaidaDto, LogarSaidaDTO } from "./cliente.service";

export class ClienteServicoImplementacao implements ClienteServico {
    
    private constructor(private prisma: ClienteRepositorio) {}
    
    public static build(prisma: ClienteRepositorio){
        return new ClienteServicoImplementacao(prisma);
    }
    
    public async listar(): Promise<ListarSaidaDto> {
        const aClientes = await this.prisma.listar();
        // lista de produtos
        const clientes = aClientes.map((c) => {
            return {
                idCliente: c.idCliente,
                nomeExibicao: c.nomeExibicao,
                dataNascimento: c.dataNascimento,
                nome: c.nome,
                email: c.email,
                senha: c.senha,
                pais: c.pais
            };
        });
        
        const saida: ListarSaidaDto = {
            clientes, 
        };
        
        return saida;
    }
    
    public async logar(email: string, senha: string): Promise<LogarSaidaDTO> {
        const aCliente = await this.prisma.logar(email, senha);
        if (!aCliente.sucesso) {
            return { sucesso: false, mensagem: aCliente.mensagem };
        }
        return { sucesso: true, mensagem: "Login bem-sucedido" };
    }
    
}