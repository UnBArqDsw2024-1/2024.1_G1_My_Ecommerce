import Image from 'next/image';
import Logo from '../assets/logo.svg';
import MenuConta from './MenuConta';

export default function TopBar() {
    return (
        <span className="p-3 flex justify-between items-center bg-[#18181C] px-8">
            <span className="flex items-center space-x-5">
                <Image src={Logo} width={35} height={35} alt="Logo do MyEcommerce" />
                <span className='text-white border-l border-gray-500 pl-5'>Loja</span>
            </span>
            <span className="flex items-center space-x-2 ">
                <MenuConta />
            </span>
        </span>
    );
}