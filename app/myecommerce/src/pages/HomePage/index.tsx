import Image from 'next/image';
import ValorantLogo from '../../assets/game-logo.svg';
import Search from '../../assets/Icon.svg';
import SetaDireita from '../../assets/seta-direita.svg';
import SetaEsquerda from '../../assets/seta-esquerda.svg';
import Small from '../../assets/valorant-small.jpg';

export default function HomePage() {
    return (
        <div className="px-60 w-screen ">
            <div className="py-10 flex items-center"> {/* barra de busca */}
                <div className="flex 
                        <Image alt='seta-esquerda' src={SetaEsquerda} width={100} height={100} className='w-10 h-10'/> w-72 p-3 rounded-full mr-5 hover:bg-neutral-700 ease-in-out duration-300">
                    <Image src={Search} alt='imagem'/>
                    <input type="text" placeholder="Busque na loja" className="bg-transparent outline-none ml-5 placeholder-neutral-500"/>
                </div>

                <div className="w-40 flex justify-between">
                    <span>Descubra</span>
                    <span className="text-neutral-500 cursor-pointer">Busque</span>
                </div>
            </div>

            <div className="grid grid-cols-4 w-full gap-10"> {/* Jogos */}
                <div className="bg-[url('../assets/valorant.jpeg')] h-[600px] bg-cover bg-center bg-no-repeat col-span-3 rounded-lg p-10 ">
                    <div className='mt-40'>
                        <Image alt='imagem' src={ValorantLogo} width={250} height={100} className='mb-10'/>
                        <div className='w-96'>
                            <p className='text-sm'>NOVIDADE: Por menos monos jetts por aí </p>
                            <p>Jett é retirada do jogo e a próxima é a reina, pois ninguem gosta de mono reyna. </p>
                        </div>
                        <p className='text-sm mt-10 mb-2' >R$ 120,00</p>
                        <div className='text-xs bg-slate-50 text-black rounded-md p-4 w-36 font-bold cursor-pointer'>
                            COMPRAR AGORA
                        </div>
                    </div>
                </div>
                <div className="grid grid-rows-5 gap-3">
                    <div className="flex px-5 bg-neutral-900 w-full rounded-lg items-center cursor-pointer">
                        <Image alt='imagem' src={Small} width={100} height={100} className='py-3 rounded-lg w-16 h-28 object-center '/>
                        <span className='ml-8'>Valorant</span>
                    </div>
                    <div className="flex px-5  w-full rounded-lg items-center">
                        <Image alt='imagem' src={Small} width={100} height={100} className='py-3 rounded-lg w-16 h-28 object-center '/>
                        <span className='ml-8'>Valorant</span>
                    </div>
                    <div className="flex px-5  w-full rounded-lg items-center">
                        <Image alt='imagem' src={Small} width={100} height={100} className='py-3 rounded-lg w-16 h-28 object-center '/>
                        <span className='ml-8'>Valorant</span>
                    </div>
                    <div className="flex px-5  w-full rounded-lg items-center">
                        <Image alt='imagem' src={Small} width={100} height={100} className='py-3 rounded-lg w-16 h-28 object-center '/>
                        <span className='ml-8'>Valorant</span>
                    </div>
                    <div className="flex px-5  w-full rounded-lg items-center">
                        <Image alt='imagem' src={Small} width={100} height={100} className='py-3 rounded-lg w-16 h-28 object-center '/>
                        <span className='ml-8'>Valorant</span>
                    </div>
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
                    <div className="flex flex-col px-5  w-full items-start cursor-pointer">
                        <Image alt='imagem' src={Small} width={90} height={150} className='py-3 rounded-lg w-52 h-64 object-center'/>
                        <span className='text-[11px] text-neutral-500' >JOGO BASE</span>
                        <span className='text-sm mt-2'>Valorant</span>
                        <span className='text-xs mt-2 bg-neutral-900 p-2 rounded-md'>AGORA NA EPIC</span>
                        <div className='text-sm mt-2'> 
                            <span className='bg-blue-600 px-2 py-1 rounded text-[10px] mr-4'>-40%</span> 
                            <span className='mr-4 line-through text-neutral-500' >R$ 120,00</span> 
                            <span>R$ 120,00</span> 
                        </div>
                    </div>

                    <div className="flex flex-col px-5  w-full items-start">
                        <Image alt='imagem' src={Small} width={90} height={150} className='py-3 rounded-lg w-52 h-64 object-center'/>
                        <span className='text-[11px] text-neutral-500' >JOGO BASE</span>
                        <span className='text-sm mt-2'>Valorant</span>
                        <span className='text-xs mt-2 bg-neutral-900 p-2 rounded-md'>AGORA NA EPIC</span>
                        <div className='text-sm mt-2'> 
                            <span className='bg-blue-600 px-2 py-1 rounded text-[10px] mr-4'>-40%</span> 
                            <span className='mr-4 line-through text-neutral-500' >R$ 120,00</span> 
                            <span>R$ 120,00</span> 
                        </div>
                    </div>

                    <div className="flex flex-col px-5  w-full items-start">
                        <Image alt='imagem' src={Small} width={90} height={150} className='py-3 rounded-lg w-52 h-64 object-center'/>
                        <span className='text-[11px] text-neutral-500' >JOGO BASE</span>
                        <span className='text-sm mt-2'>Valorant</span>
                        <span className='text-xs mt-2 bg-neutral-900 p-2 rounded-md'>AGORA NA EPIC</span>
                        <div className='text-sm mt-2'> 
                            <span className='bg-blue-600 px-2 py-1 rounded text-[10px] mr-4'>-40%</span> 
                            <span className='mr-4 line-through text-neutral-500' >R$ 120,00</span> 
                            <span>R$ 120,00</span> 
                        </div>
                    </div>

                    <div className="flex flex-col px-5  w-full items-start">
                        <Image alt='imagem' src={Small} width={90} height={150} className='py-3 rounded-lg w-52 h-64 object-center'/>
                        <span className='text-[11px] text-neutral-500' >JOGO BASE</span>
                        <span className='text-sm mt-2'>Valorant</span>
                        <span className='text-xs mt-2 bg-neutral-900 p-2 rounded-md'>AGORA NA EPIC</span>
                        <div className='text-sm mt-2'> 
                            <span className='bg-blue-600 px-2 py-1 rounded text-[10px] mr-4'>-40%</span> 
                            <span className='mr-4 line-through text-neutral-500' >R$ 120,00</span> 
                            <span>R$ 120,00</span> 
                        </div>
                    </div>

                    <div className="flex flex-col px-5  w-full items-start">
                        <Image alt='imagem' src={Small} width={90} height={150} className='py-3 rounded-lg w-52 h-64 object-center'/>
                        <span className='text-[11px] text-neutral-500' >JOGO BASE</span>
                        <span className='text-sm mt-2'>Valorant</span>
                        <span className='text-xs mt-2 bg-neutral-900 p-2 rounded-md'>AGORA NA EPIC</span>
                        <div className='text-sm mt-2'> 
                            <span className='bg-blue-600 px-2 py-1 rounded text-[10px] mr-4'>-40%</span> 
                            <span className='mr-4 line-through text-neutral-500' >R$ 120,00</span> 
                            <span>R$ 120,00</span> 
                        </div>
                    </div>
                </div>

            </div>

            {/* Ofertas da semana */}
            <div className='mt-20 mb-10'>
                <div className='grid grid-cols-3 gap-10 w-full'>
                    <div className='flex flex-col '>
                        <div className="bg-[url('../assets/valorant.jpeg')] h-[250px] bg-cover bg-center bg-no-repeat rounded-lg flex items-end">
                            <div className='bg-gradient-to-r from-indigo-500 to-blue-700 w-full h-10 rounded-b-lg flex items-center justify-center'>
                                <span className='font-medium'>Oferta da semana</span>
                            </div>
                        </div>
                        <span className='text-2xl my-2'>Valorant</span>
                        <div className='mt-2'> 
                            <span className='bg-blue-600 px-2 py-1 rounded mr-4 text-xs'>-40%</span> 
                            <span className='mr-4 line-through text-neutral-500 text-xl' >R$ 120,00</span> 
                            <span className='text-xl' >R$ 120,00</span> 
                        </div>
                    </div>

                    <div className='flex flex-col'>
                        <div className="bg-[url('../assets/valorant.jpeg')] h-[250px] bg-cover bg-center bg-no-repeat rounded-lg flex items-end">
                            <div className='bg-gradient-to-r from-indigo-500 to-blue-700 w-full h-10 rounded-b-lg flex items-center justify-center'>
                                <span className='font-medium'>Oferta da semana</span>
                            </div>
                        </div>
                        <span className='text-2xl my-2'>Valorant</span>
                        <div className='mt-2'> 
                            <span className='bg-blue-600 px-2 py-1 rounded mr-4 text-xs'>-40%</span> 
                            <span className='mr-4 line-through text-neutral-500 text-xl' >R$ 120,00</span> 
                            <span className='text-xl' >R$ 120,00</span> 
                        </div>
                    </div>

                    <div className='flex flex-col'>
                        <div className="bg-[url('../assets/valorant.jpeg')] h-[250px] bg-cover bg-center bg-no-repeat rounded-lg flex items-end">
                            <div className='bg-gradient-to-r from-indigo-500 to-blue-700 w-full h-10 rounded-b-lg flex items-center justify-center'>
                                <span className='font-medium'>Oferta da semana</span>
                            </div>
                        </div>
                        <span className='text-2xl my-2'>Valorant</span>
                        <div className='mt-2'> 
                            <span className='bg-blue-600 px-2 py-1 rounded mr-4 text-xs'>-40%</span> 
                            <span className='mr-4 line-through text-neutral-500 text-xl' >R$ 120,00</span> 
                            <span className='text-xl' >R$ 120,00</span> 
                        </div>
                    </div>

                </div>
            </div>

        </div>
    );
}