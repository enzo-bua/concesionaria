import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

export default function BottonWhatsapp({ modelo, marca }) {
  const openWhatsApp = () => {
    const message = `Hola, me gustaría saber más sobre el ${marca} ${modelo}. ¿Podemos hablar sobre ello?`;
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/3446377934?text=${encodedMessage}`, '_blank');
  };

  return (
    <div
      className='bg-green-500 text-white flex items-center justify-center rounded-md p-3 cursor-pointer shadow-md transition duration-300 hover:bg-green-600 w-44 h-10'
      onClick={openWhatsApp}
    >
      <FaWhatsapp className='text-3xl mr-2' />
      <p className='text-lg'>Consultar</p>
    </div>
  );
}
