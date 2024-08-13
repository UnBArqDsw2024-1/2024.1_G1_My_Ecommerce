import { PrismaClient } from "@prisma/client";
import { Jogo } from "../../../entidade/jogo";
import { JogoRepositorio } from "../jogo.repositorio";

export class JogoRepositorioPrisma implements JogoRepositorio {

    private constructor(readonly prisma: PrismaClient){}

    public static build(prisma: PrismaClient){
        return new JogoRepositorioPrisma(prisma);
    }

    public async cria(jogo: Jogo): Promise<void> {
        const data = {
            idJogo: jogo.idJogo,
            nomeJogo: jogo.nomeJogo,
            precoJogo: jogo.precoJogo,
        };

        await this.prisma.jogo.create({
            data,
        });
    }

    public async lista(): Promise<Jogo[]> {
        const aJogos = await this.prisma.jogo.findMany();

        const jogos: Jogo[] = aJogos.map((j) => {
            const { idJogo, nomeJogo, precoJogo} = j;
            return Jogo.with(idJogo, nomeJogo, precoJogo);
        });

        return jogos;
    }

    public async atualiza(jogo: Jogo): Promise<void> {
        const data = {
            idJogo: jogo.idJogo,
            nomeJogo: jogo.nomeJogo,
            precoJogo: Number(jogo.precoJogo),
            
        };

        await this.prisma.jogo.update({  // acessa o banco do prisma
            where: {
                idJogo: jogo.idJogo,
            },
            data,
        });
    }
    // public async find(id: string): Promise<Product | null> {
    //     const aProduct = await this.prisma.product.findUnique({
    //         where: { id },
    //     });

    //     if (!aProduct) {
    //         return null;
    //     }

    //     const { name, price, quantity } = aProduct;

    //     const product = Product.with(id, name, price, quantity);

    //     return product;
    // }

}