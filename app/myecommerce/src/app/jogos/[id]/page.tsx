// import ReactStars from 'react-stars';

interface Props {
    params: { id: string }
}

const jogo = {
    nome: "Valorant",
    id: "ide15adad88",
    desenvolvedor: "Desenvolvedor XYZ",
    editora: "Editora ABC",
    avaliacoes: [],
    descricao: "Este é um jogo muito ruim.",
    dataLancamento: "2024-01-01",
    dataLancamentoInicial: "2024-01-01",
    preco: "20 USD",
    desconto: 0.05,
    nota: 4.5, // Esse vem do metodo getNota na verdade
};


export default function JogoDetalhe({ params }: Props) {

    return (
        <div>
            {/* Nome do JOgo */}
            <h1 className="font-bold text-6xl p-3 w-screen flex items-center"> {jogo.nome} </h1>
            <div className="px-10 w-screen flex items-center">
                {/* <ReactStars count={5} size={24} color2={'#ffd700'} /> */}
                <span className="font-bold p-2 rounded bg-neutral-900"> {jogo.nota}</span>

            </div>

            <div className="flex">
                {/* col-principal */}
                <div className="w-3/4 p-4">
                    {/* <Image src={jogo.imagemCaminho} alt="capa jogo" width={35} height={35} /> */}
                    <img className="w-full h-[610px] rounded-[5px]" src="https://thecatapi.com/api/images/get?format=src&type=gif" />
                    
                    <p className="py-4">{jogo.descricao}</p>

                    <div className="flex">
                        <div className="w-1/2 p-4">
                            <h1 className="text-stone-500">Generos</h1>
                            {/* <a className="underline" href="#">{jogo.genero[0]}</a> */}
                            <a className="underline" href="#">jogo.genero[0]</a>
                        </div>
                        <div className="w-1/2 p-4">
                            <h1 className="text-stone-500">Recursos</h1>
                            {/* <a className="underline" href="#">{jogo.recurso[0]}</a> */}
                            <a className="underline" href="#">jogo.recurso[0]</a>
                        </div>
                    </div>

                    <h1 className="text-3xl py-4">Classificações dos jogadores da Epic</h1>
                    <h2 className="text-stone-400">Fornecidas por jogadores no ecossistema da Epic Games.</h2>
                </div>
                {/* col-lateral */}
                <div className="w-1/4 p-4 place-content-start" >
                    <div className="">
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full">
                            OBTER
                        </button>
                    </div>
                    <div>
                        <table className="table-auto w-full">
                            <thead>
                                <tr>
                                    <th></th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="py-[12px] text-left text-stone-500">Desenvolvedor</td>
                                    <td className="text-right">{jogo.desenvolvedor}</td>
                                </tr>
                                <tr>
                                    <td className="py-[12px] text-left text-stone-500">Editora</td>
                                    <td className="text-right">{jogo.editora}</td>
                                </tr>
                                <tr>
                                    <td className="py-[12px] text-left text-stone-500">Data de lançameto</td>
                                    <td className="text-right">{jogo.dataLancamento}</td>
                                </tr>
                                <tr>
                                    <td className="py-[12px] text-left text-stone-500">Lançameto inicial</td>
                                    <td className="text-right">{jogo.dataLancamentoInicial}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}