import Image from 'next/image';
import React from 'react';

interface CompraProps {
  isOpen: boolean;
  onClose: () => void;
  jogo: Jogo
}

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

const Compra: React.FC<CompraProps> = ({ isOpen, onClose, jogo }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-50 w-screen flex items-center justify-center">
      <div className="relative bg-white text-black rounded w-3/5 h-4/5 flex">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-black text-lg"
        >
          &times;
        </button>
        <div className='grid grid-cols-3 w-full h-full'>
            <div className='col-span-2 p-6 flex flex-col'>
                <span className='font-semibold'>CHECKOUT</span>
                <div className='w-full h-0.5 bg-black' />

                <div className='my-8'>MÉTODOS DE PAGAMENTO</div>

                <div className='bg-slate-100 rounded p-5 my-4'>
                    <label htmlFor="">
                        <input type="radio" id="opcao2" name="opcao" value="1" className="radio-input mr-5" ></input>Cartão de crédito
                    </label>
                </div>
                <div className='bg-slate-100 rounded p-5 my-4'>
                    <label htmlFor="">
                        <input type="radio" id="opcao2" name="opcao" value="2" className="radio-input mr-5" ></input>PIX
                    </label>
                </div>
                <div className='bg-slate-100 rounded p-5 my-4'>
                    <label htmlFor="">
                        <input type="radio" id="opcao2" name="opcao" value="3" className="radio-input mr-5" ></input>Boleto Flash
                    </label>
                </div>

            </div>

            <div className='bg-slate-200 p-6 flex flex-col'>
                <span className='mb-5 font-semibold'>RESUMO DO PEDIDO</span>

                <div className='my-5'>
                    <div className='relative w-52 h-72 overflow-hidden rounded-lg'>
                        <Image alt='imagem' src={jogo.imagemCaminho} className='py-3 rounded-lg' layout="fill" objectFit="cover"/>
                    </div>
                </div>

                <div className='font-bold font-xl'>{jogo.nomeJogo}</div>
                <div className='flex w-full justify-between text-gray-600'>
                    <span>Preço: </span>
                    <span>R$ {jogo.precoJogo}</span>
                </div>
                <div className='flex w-full justify-between text-gray-600'>
                    <span>Desconto: </span>
                    <span>R$ {jogo.desconto}</span>
                </div>
                <div className='w-full h-0.5 bg-black' />
                <div className='flex w-full justify-between text-gray-600'>
                    <span>Total:</span>
                    <span className='font-bold'>R$ {jogo.precoJogo * (1 - (jogo.desconto/100))}</span>
                </div>

                <div className=' mt-28'> {/* flex items-end justify-center items-center */}
                    
                    <button onClick={onClose} className='w-full'>
                        <div className='bg-blue-500 w-full rounded p-5 text-center'>
                            <span className='text-white'>FAZER PEDIDO</span>
                        </div>
                    </button>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Compra;
