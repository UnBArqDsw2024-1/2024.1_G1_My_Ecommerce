// interface
import { PrismaClient } from "@prisma/client";
import { EditoraRepositorio } from "../editora.repositorio";

export class EditoraRepositorioPrisma implements EditoraRepositorio {

    private constructor(readonly prisma: PrismaClient){}

    public static build(prisma: PrismaClient){
        return new EditoraRepositorioPrisma(prisma);
    }

    public async busca(idEditora: number): Promise< string | null> {
        const aEditora = await this.prisma.editora.findUnique({
            where: { idEditora },
        });

        if (!aEditora) {
            return null;
        }

        return aEditora.nomeEditora;
    }

}