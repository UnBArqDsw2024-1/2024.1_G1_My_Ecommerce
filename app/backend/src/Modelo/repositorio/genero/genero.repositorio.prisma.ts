// interface
import { PrismaClient } from "@prisma/client";
import { GeneroRepositorio } from "./genero.repositorio";

export class GeneroRepositorioPrisma implements GeneroRepositorio {

    private constructor(readonly prisma: PrismaClient){}

    public static build(prisma: PrismaClient){
        return new GeneroRepositorioPrisma(prisma);
    }

    public async busca(idGenero: number): Promise< string | null> {
        const aGenero = await this.prisma.genero.findUnique({
            where: { idGenero },
        });

        if (!aGenero) {
            return null;
        }

        return aGenero.nomeGenero;
    }

}