
export type EditoraProps = {
    idEditora: number;
    nomeEditora: string;
}

export class Editora {
    private constructor(readonly props: EditoraProps){}

    public static with(
        idEditora: number,
        nomeEditora: string,
    ) {
        return new Editora({
            idEditora,
            nomeEditora
        });
    }

    public get idEditora(){
        return this.props.idEditora;
    }

    public get nomeEditora(){
        return this.props.nomeEditora;
    }

}
