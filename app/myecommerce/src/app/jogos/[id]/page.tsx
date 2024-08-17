"use client"

// import ReactStars from 'react-rating-star-with-type'; 
import React, { useState } from 'react';
import ReactStars from 'react-stars';
import { CiGlobe } from "react-icons/ci";

interface Props {
    params: { id: string }
};

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
    recursos: ['Competitivo', 'Multijogador'],
    generos: ['Ação', 'Tiro'],
};

const imagens = [
    '../../../assets/valorant.jpeg',
    '../../../assets/valorant.jpeg',
    '../../../assets/valorant.jpeg',
    '../../../assets/valorant.jpeg',
];



export default function JogoDetalhe({ params }: Props) {
    const [currentIndex, setCurrentIndex] = useState(0);
    
    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? imagens.length - 1 : prevIndex - 1));
    };
    
    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex === imagens.length - 1 ? 0 : prevIndex + 1));
    };

    return (
        <div>
            {/* Nome do JOgo */}
            <h1 className="font-bold text-6xl p-3 w-screen flex items-center text-white"> {jogo.nome} </h1>
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
                    {/* <Image src={jogo.imagemCaminho} alt="capa jogo" width={35} height={35} /> */}
                    <img className="w-full h-[610px] rounded-[5px]" src="https://thecatapi.com/api/images/get?format=src&type=gif" />
                    <div className="carousel my-12 mx-auto">
                        <div className="relative overflow-hidden w-full">
                            <div className="flex transition-transform duration-300" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                                {imagens.map((src, index) => (
                                    <div key={index} className="min-w-full flex-shrink-0">
                                        <img src={src} alt={`Slide ${index}`} className="w-full h-auto object-cover" />
                                    </div>
                                ))}   
                            </div>
                            <button className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full" onClick={handlePrev}>
                                &#10094;
                            </button>
                            <button className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full" onClick={handleNext}>
                                &#10095;
                            </button>
                        </div>
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
                        <h1 className="text-3xl py-4 text-white">Requisitos do sistema de {jogo.nome}</h1>
                        <div id="requisitos" className="bg-[#202020] w-full p-[60px]">
                            <h1 className="text-stone-300">Recomendado</h1>
                            jogo.plataforma
                        </div>
                        </div>
                    </div>

                    {/* col-lateral */}
                    <div className="w-1/4 p-4 place-content-start" >
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full">
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
                                        <td className="text-right text-white">{jogo.desenvolvedor}</td>
                                    </tr>
                                    <tr>
                                        <td className="py-[12px] text-left text-stone-500">Editora</td>
                                        <td className="text-right text-white">{jogo.editora}</td>
                                    </tr>
                                    <tr>
                                        <td className="py-[12px] text-left text-stone-500">Data de lançameto</td>
                                        <td className="text-right text-white">{jogo.dataLancamento}</td>
                                    </tr>
                                    <tr>
                                        <td className="py-[12px] text-left text-stone-500">Lançameto inicial</td>
                                        <td className="text-right text-white">{jogo.dataLancamentoInicial}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
    );
}