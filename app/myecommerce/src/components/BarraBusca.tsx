import Image from 'next/image';
import Search from '../assets/Icon.svg';

export default function Login() {
    return (
        <div className="px-40 py-10 flex items-center"> {/* barra de busca */}
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
    );
} 
