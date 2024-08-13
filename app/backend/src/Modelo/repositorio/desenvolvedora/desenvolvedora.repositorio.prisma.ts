// interface
import { PrismaClient } from "@prisma/client";
import { DesenvolvedoraRepositorio } from "./desenvolvedora.repositorio";

export class DesenvolvedoraRepositorioPrisma implements DesenvolvedoraRepositorio {

    private constructor(readonly prisma: PrismaClient){}

    public static build(prisma: PrismaClient){
        return new DesenvolvedoraRepositorioPrisma(prisma);
    }

    public async busca(idDesenvolvedora: number): Promise< string | null> {
        const aDesenvolvedora = await this.prisma.desenvolvedora.findUnique({
            where: { idDesenvolvedora },
        });

        if (!aDesenvolvedora) {
            return null;
        }

        return aDesenvolvedora.nomeDesenvolvedora;
    }

}