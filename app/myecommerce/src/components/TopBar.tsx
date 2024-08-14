import Image from 'next/image';
import Logo from '../assets/logo.svg';
// import Perfil from '../assets/perfil.svg';
import Planeta from '../assets/planeta.svg';
import MenuConta from './MenuConta';

export default function TopBar() {
    return (
        <span className="p-3 flex justify-between items-center bg-[#18181C]">
            <span className="flex items-center space-x-2">
                <Image src={Logo} width={35} height={35} alt="Logo do MyEcommerce" />
                <span className='text-white'>Loja</span>
            </span>
            <span className="flex items-center space-x-2">
                <Image src={Planeta} width={35} height={35} alt="Mudar linguagem" />
                <MenuConta />
            </span>

        </span>
    );
}