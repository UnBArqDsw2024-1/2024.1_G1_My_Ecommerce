import { IoMdSearch } from "react-icons/io";

export default function Login() {
    return (
        <div className="py-10 w-screen flex items-center"> {/* barra de busca */}
            <div className="flex bg-[#202020] w-72 p-3 rounded-full mr-5 hover:bg-neutral-700 ease-in-out duration-300">
                <IoMdSearch className="align-middle w-auto" />
                <input type="text" placeholder="Busque na loja" className="bg-transparent outline-none ml-5 placeholder-neutral-500" />
            </div>

            <div className="w-40 flex justify-between">
                <span>Descubra</span>
                <span className="text-neutral-500">Busque</span>
            </div>
        </div>
    );
} 
