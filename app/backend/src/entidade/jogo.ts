
export type JogoProps = {
    idJogo: string;
    nomeJogo: string;
    precoJogo: number;
    // nota: number | null;
}

export class Jogo {
    private constructor(readonly props: JogoProps){}

    public static cria(nomeJogo: string, precoJogo: number){
        return new Jogo({
            idJogo: crypto.randomUUID().toString(),
            nomeJogo,
            precoJogo,
            // nota: null,
        })
    }

    public static with(
        idJogo: string,
        nomeJogo: string,
        precoJogo: number
    ) {
        return new Jogo({
            idJogo,
            nomeJogo,
            precoJogo
        });
    }

    public get idJogo(){
        return this.props.idJogo;
    }

    public get nomeJogo(){
        return this.props.nomeJogo;
    }

    public get precoJogo(){
        return this.props.precoJogo;
    }

}
