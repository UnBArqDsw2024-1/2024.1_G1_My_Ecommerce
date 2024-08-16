"use client";

import axios from 'axios';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import ValorantLogo from '../../assets/game-logo.svg';
import SetaDireita from '../../assets/seta-direita.svg';
import SetaEsquerda from '../../assets/seta-esquerda.svg';

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

export default function HomePage() {

    const [loading, setLoading] = useState(true);
    const [jogos, setJogos] = useState<Jogo[]>([]);

    useEffect(() => {
        const fetchJogo = async () => {
            setLoading(true);
            try {
                const response = await axios.get('http://localhost:8000/');
                console.log('isso',response.data);
                setJogos(response.data.jogos);
            }
            catch (error) {
                console.error(error);
            }
            setLoading(false);
        }

        fetchJogo();
    }, []);

    if (loading) {
        return <div>Carregando...</div>;
    }

    return (
        <div className="px-60 w-screen ">

            <div className="grid grid-cols-4 w-full gap-10"> {/* Jogos */}
                <div className="bg-[url('../assets/valorant.jpeg')] h-[600px] bg-cover bg-center bg-no-repeat col-span-3 rounded-lg p-10 ">
                    <div className='mt-40'>
                        <Image alt='imagem' src={ValorantLogo} width={250} height={100} className='mb-10'/>
                        <div className='w-96'>
                            <p className='text-sm'>NOVIDADE: novo mapa abyss </p>
                            <p> Morra de formas diferentes, além de passar vergonha sendo amassado pelo time adversário você pode se atirar do precipício. </p>
                        </div>
                        <div className='text-sm mb-2 flex mt-8 '>
                            <p className='line-through text-neutral-500 mr-2' >R$ { parseFloat((jogos[0].precoJogo * (1 - jogos[0].desconto/100)).toFixed(2)) }</p> 
                            <p className='' >R$ {jogos[0].precoJogo}</p>
                        </div>
                        <Link href={`/jogos/jogo1`}>
                            <div className='text-xs bg-slate-50 text-black rounded-md p-4 w-36 font-bold hover:bg-red-500 hover:text-white ease-in-out duration-300'>
                                COMPRAR AGORA
                            </div>
                        </Link>
                    </div>
                </div>
                <div className="grid grid-rows-5 gap-3">
                    <Link href={`/jogos/jogo1`}>
                        <div className="flex px-5 hover:bg-neutral-900 w-full rounded-lg items-center">
                            <div className='relative w-16 h-28 overflow-hidden rounded-lg'>
                                <Image alt='imagem' src={jogos[0].imagemCaminho} layout="fill" objectFit="cover" className='py-3 rounded-lg '/>
                            </div>
                            <span className='ml-8'>{jogos[0].nomeJogo}</span>
                        </div>
                    </Link>
                    <Link href={`/jogos/jogo2`}>
                        <div className="flex px-5 w-full rounded-lg items-center hover:bg-neutral-900">
                            <div className='relative w-16 h-28 overflow-hidden rounded-lg'>
                                <Image alt='imagem' src={jogos[1].imagemCaminho} layout="fill" objectFit="cover" className='py-3 rounded-lg '/>
                            </div>
                            <span className='ml-8'>{jogos[1].nomeJogo}</span>
                        </div>
                    </Link>
                    <Link href={`/jogos/jogo3`}>
                        <div className="flex px-5 w-full rounded-lg items-center hover:bg-neutral-900">
                            <div className='relative w-16 h-28 overflow-hidden rounded-lg'>
                                <Image alt='imagem' src={jogos[2].imagemCaminho} layout="fill" objectFit="cover" className='py-3 rounded-lg '/>
                            </div>
                            <span className='ml-8'>{jogos[2].nomeJogo}</span>
                        </div>
                    </Link>
                </div>
            </div>

            {/* Jogos em destaque */}
            <div>
                <div className='w-full flex justify-between mt-5'>

                    <div className='flex items-center'>
                        <span className='text-2xl cursor-pointer' >Jogos em destaque </span>
                        <Image alt='seta-direita' src={SetaDireita} width={100} height={100} className='ml-3 w-4 h-4'/>
                    </div>

                    <div className='flex gap-4'>
                        <Image alt='seta-esquerda' src={SetaEsquerda} width={100} height={100} className='w-8 h-8 bg-neutral-900 rounded-full p-2 '/>
                        <Image alt='seta-direita' src={SetaDireita} width={100} height={100} className='w-8 h-8 bg-neutral-900 rounded-full p-2 cursor-pointer'/>
                    </div>
                </div>

                <div className='grid grid-cols-5 gap-3 items-center'>
                    {jogos.map((jogo) => {
                        return(
                            <Link key={jogo.idJogo} href={`/jogos/${jogo.idJogo}`}>
                                <div className="flex flex-col px-5  w-full items-start cursor-pointer">
                                    <div className='relative w-52 h-72 overflow-hidden rounded-lg'>
                                        <Image alt='imagem' src={jogo.imagemCaminho} className='py-3 rounded-lg' layout="fill" objectFit="cover"/>
                                    </div>
                                    <span className='text-[11px] text-neutral-500' >JOGO BASE</span>
                                    <span className='text-sm mt-2'>{jogo.nomeJogo}</span>
                                    <span className='text-xs mt-2 bg-neutral-900 p-2 rounded-md'>AGORA NA EPIC</span>
                                    <div className='text-sm mt-2'> 
                                        {jogo.desconto > 0? (
                                            <span>
                                                <span className='bg-blue-600 px-2 py-1 rounded text-[10px] mr-4'>-{jogo.desconto}%</span> 
                                                <span className='mr-4 line-through text-neutral-500' >R$ { parseFloat((jogo.precoJogo * (1 - jogo.desconto/100)).toFixed(2)) }</span> 
                                            </span>
                                        ) : null }
                                        <span>R$ {jogo.precoJogo}</span> 
                                    </div>
                                </div>
                            </Link>
                        )
                    })}
                </div>

            </div>

            {/* Ofertas da semana */}
            <div className='mt-20 mb-10'>
                <div className='grid grid-cols-3 gap-10 w-full'>
                    {jogos.filter(jogo => jogo.desconto > 0).map((jogo) => { 
                        return(
                            <Link key={jogo.idJogo} href={`/jogos/${jogo.idJogo}`}>
                                <div className='flex flex-col '>
                                    <div className=" h-[250px] bg-cover bg-center bg-no-repeat rounded-lg flex items-end" style={{ backgroundImage: `url('${jogo.imagemCaminho}')` }}>
                                        <div className='bg-gradient-to-r from-indigo-500 to-blue-700 w-full h-10 rounded-b-lg flex items-center justify-center'>
                                            <span className='font-medium'>Oferta da semana</span>
                                        </div>
                                    </div>
                                    <span className='text-2xl my-2'>{jogo.nomeJogo}</span>
                                    <div className='mt-2'> 
                                        <span className='bg-blue-600 px-2 py-1 rounded mr-4 text-xs'>-{jogo.desconto}%</span> 
                                        <span className='mr-4 line-through text-neutral-500 text-xl' >R$ { parseFloat((jogo.precoJogo * (1 - jogo.desconto/100)).toFixed(2)) }</span> 
                                        <span className='text-xl' >R$ {jogo.precoJogo}</span> 
                                    </div>
                                </div>
                            </Link>
                        )
                    })}
                </div>
            </div>

        </div>
    );
}