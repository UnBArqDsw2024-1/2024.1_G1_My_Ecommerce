
"use client";
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

import Perfil from '../assets/perfil.svg';

export default function MenuConta() {
    const [isOpen, setIsOpen] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [menuRef]);

    return (
        <div className="relative" ref={menuRef}>
            <button onClick={toggleMenu}>
                <Image src={Perfil} alt="Meu perfil" width={35} height={35} />
            </button>
            {isOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-[#18181C] rounded-md shadow-lg">
                    <div className="flex flex-col items-start p-4 text-white">
                        <div className="font-bold text-white">Nome Usuário</div>
                        <div className="mt-2 text-gray-200">Minha Biblioteca</div>
                        <div className="mt-2 text-gray-200">Sair</div>
                    </div>
                </div>
            )}
        </div>
    );
}