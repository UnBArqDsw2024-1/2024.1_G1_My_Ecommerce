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
            <h1 className="font-bold text-6xl p-10 w-screen flex items-center"> {jogo.nome} </h1>
            <div className="px-10 w-screen flex items-center">
                {/* <ReactStars count={5} size={24} color2={'#ffd700'} /> */}
                <span className="font-bold p-2 rounded bg-neutral-900"> {jogo.nota}</span>

            </div>

            <div className="flex">
                {/* col-principal */}
                <div className="w-3/4 p-4">
                    {/* <Image src={jogo.imagemCaminho} alt="capa jogo" width={35} height={35} /> */}
                    <img src="https://thecatapi.com/api/images/get?format=src&type=gif" />
                    <p>{jogo.descricao}</p>

                    <div className="flex">
                        <div className="w-1/2 p-4">
                            <h1>Generos</h1>
                        </div>
                        <div className="w-1/2 p-4">
                            <h1>Recursos</h1>
                        </div>
                    </div>
                </div>
                {/* col-lateral */}
                <div className="w-1/4 p-4 place-content-evenly" >
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
                                    <td className="text-left">Desenvolvedor</td>
                                    <td className="text-right">{jogo.desenvolvedor}</td>
                                </tr>
                                <tr>
                                    <td className="text-left">Editora</td>
                                    <td className="text-right">{jogo.editora}</td>
                                </tr>
                                <tr>
                                    <td className="text-left">Data de lançameto</td>
                                    <td className="text-right">{jogo.dataLancamento}</td>
                                </tr>
                                <tr>
                                    <td className="text-left">Lançameto inicial</td>
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