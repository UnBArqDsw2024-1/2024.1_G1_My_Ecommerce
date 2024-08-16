"use client"

import Compra from '@/components/Compra';
import axios from 'axios';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import ReactStars from 'react-stars';


interface Props {
    params: { id: string }
};

interface Jogo {
    nomeJogo: string;
    idJogo: string;
    desenvolvedora: string;
    editora: string;
    descricao: string;
    dataLancamento: string;
    dataLancamentoInicial: string;
    precoJogo: number;
    desconto: number;
    nota: number;
    recursos: string[];
    generos: string[];
    imagemCaminho: string;
    plataforma: string;
    quantidadeVendido: number;
}




export default function JogoDetalhe({ params }: Props) {

    const [loading, setLoading] = useState(true);
    const [jogo, setJogo] = useState<Jogo | null>(null);

    const [isModalOpen, setIsModalOpen] = useState(false);
    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? imagens.length - 1 : prevIndex - 1));
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex === imagens.length - 1 ? 0 : prevIndex + 1));
    };

    const handleClick = (index: number) => {
        setCurrentIndex(index);
    }


    useEffect(() => {
        const fetchJogo = async () => {
            setLoading(true);
            try {
                const response = await axios.post<Jogo>('http://localhost:8000/jogos/buscarPorId', { idJogo: params.id });
                setJogo(response.data.props);
            }
            catch (error) {
                console.error(error);
            }
            setLoading(false);
        }

        fetchJogo();
    }, [params.id]);


    if (loading) {
        return <div>Carregando...</div>;
    }

    if (!jogo) {
        return <div>Jogo não encontrado.</div>;
    }

    const imagens = [
        jogo.imagemCaminho,
        'https://thecatapi.com/api/images/get?format=src&type=gif',
        'https://picsum.photos/804/610?random=1',
        'https://picsum.photos/804/610?random=2',
        'https://picsum.photos/804/610?random=3',
        'https://picsum.photos/804/610?random=4',
    ];

    const dataLancamento = new Date(jogo.dataLancamento);
    var dia = String(dataLancamento.getUTCDate()).padStart(2, '0');
    var mes = String(dataLancamento.getUTCMonth() + 1).padStart(2, '0'); // Mês é 0-indexado, então +1
    var ano = dataLancamento.getUTCFullYear();
    const dataLancamentoFormatada = `${dia}/${mes}/${ano}`;

    const dataLancamentoInicial = new Date(jogo.dataLancamentoInicial);
    dia = String(dataLancamentoInicial.getUTCDate()).padStart(2, '0');
    mes = String(dataLancamentoInicial.getUTCMonth() + 1).padStart(2, '0'); // Mês é 0-indexado, então +1
    ano = dataLancamentoInicial.getUTCFullYear();
    const dataLancamentoInicialFormatada = `${dia}/${mes}/${ano}`;

    return (
        <div className='px-40'>
            
            <Compra isOpen={isModalOpen} onClose={closeModal} jogo={jogo} />

            {/* Nome do Jogo */}
            <h1 className="font-bold text-6xl p-3 w-screen flex items-center text-white"> {jogo.nomeJogo} </h1>
            <div className="px-10 w-screen flex items-center">
                <ReactStars
                    count={5}
                    value={jogo.nota}
                    size={24}
                    color2={'#ffd700'} // Cor das estrelas preenchidas
                    edit={false} // Torna as estrelas não editáveis
                />
                <span className="px-4">
                    <span className="font-bold p-2 rounded bg-neutral-900 text-gray-300">
                        {jogo.nota}

                    </span>
                </span>
            </div>

            <div className="flex">
                {/* col-principal */}
                <div className="w-3/4 p-4">
                    <Image src={imagens[currentIndex]} alt="capa jogo" width={1000} height={1000} /> 

                    <div className="flex items-center w-[804px] justify-between mt-4">
                        <button className="mt-4 mr-4 bg-gray-800 text-white w-8 h-8 rounded-full flex items-center justify-center" onClick={handlePrev}>
                            &#10094;
                        </button>

                        <div className="flex mt-4 space-x-7">
                            {imagens.map((src, index) => (
                                <div key={index} className="cursor-pointer" onClick={() => handleClick(index)}>
                                    <img src={src} alt={`Slide ${index}`} className={`w-[150px] h-[70px] object-cover rounded-md ${currentIndex === index ? 'border border-white-500' : ''}`} />
                                </div>
                            ))}
                        </div>

                        <button className="mt-4 ml-4 bg-gray-800 text-white w-8 h-8 rounded-full flex items-center justify-center" onClick={handleNext}>
                            &#10095;
                        </button>
                    </div>

                    <p className="py-4 text-white">{jogo.descricao}</p>

                    <div className="flex">
                        <div className="w-1/2 p-4">
                            <h1 className="text-stone-500">Gêneros</h1>
                            {jogo.generos.map((genero, index) => (
                                <a key={index} className="underline text-white mr-2" href="#">{genero}</a>
                            ))}
                        </div>
                        <div className="w-1/2 p-4">
                            <h1 className="text-stone-500">Recursos</h1>
                            {jogo.recursos.map((recurso, index) => (
                                <a key={index} className="underline text-white mr-2" href="#">{recurso}</a>
                            ))}
                        </div>
                    </div>

                    <h1 className="text-3xl py-4 text-white">Classificações dos jogadores da Epic</h1>
                    <h2 className="text-stone-400">Fornecidas por jogadores no ecossistema da Epic Games.</h2>
                    <div className="p-10 flex items-center justify-center">
                        <span className="text-6xl px-4">
                            <span className="font-bold p-2 rounded bg-neutral-900 text-gray-300">
                                {jogo.nota}
                            </span>
                        </span>
                        <ReactStars
                            count={5}
                            value={jogo.nota}
                            size={64}
                            color2={'#ffd700'} // Cor das estrelas preenchidas
                            edit={false} // Torna as estrelas não editáveis
                        />
                    </div>
                    <div>
                        <h1 className="text-3xl py-4 text-white">Requisitos do sistema de {jogo.nomeJogo}</h1>
                        <div id="requisitos" className="bg-[#202020] w-full p-[60px]">
                            <h1 className="text-stone-300">Recomendado</h1>
                            {jogo.plataforma}
                        </div>
                    </div>
                </div>

                {/* col-lateral */}
                <div className="w-1/4 p-4 place-content-start" >
                    <div className='text-3xl mt-2 py-4'> 
                    {jogo.desconto > 0? (
                            <span>
                                <span className='bg-blue-600 px-2 py-1 rounded text-2xl mr-4'>-{jogo.desconto}%</span> 
                                <span className='mr-4 line-through text-neutral-500' >R$ { parseFloat((jogo.precoJogo * (1 - jogo.desconto/100)).toFixed(2)) }</span> 
                            </span>
                        ) : null }
                        <span>R$ {jogo.precoJogo}</span> 
                    </div>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full" onClick={openModal}>
                        OBTER
                    </button>
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
                                    <td className="text-right text-white">{jogo.desenvolvedora}</td>
                                </tr>
                                <tr>
                                    <td className="py-[12px] text-left text-stone-500">Editora</td>
                                    <td className="text-right text-white">{jogo.editora}</td>
                                </tr>
                                <tr>
                                    <td className="py-[12px] text-left text-stone-500">Data de lançameto</td>
                                    <td className="text-right text-white">{ dataLancamentoFormatada }</td>
                                </tr>
                                <tr>
                                    <td className="py-[12px] text-left text-stone-500">Lançameto inicial</td>
                                    <td className="text-right text-white">{ dataLancamentoInicialFormatada }</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>

    );
}