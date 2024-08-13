
export type GeneroProps = {
    idGenero: number;
    nomeGenero: string;
}

export class Genero {
    private constructor(readonly props: GeneroProps){}

    public static with(
        idGenero: number,
        nomeGenero: string,
    ) {
        return new Genero({
            idGenero,
            nomeGenero
        });
    }

    public get idGenero(){
        return this.props.idGenero;
    }

    public get nomeGenero(){
        return this.props.nomeGenero;
    }

}
