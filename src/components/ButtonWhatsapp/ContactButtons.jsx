'use client';
import React from 'react';
import { FaWhatsapp, FaEnvelope } from 'react-icons/fa';

export default function ContactButtons() {
  const openWhatsApp = () => {
    window.open(
      'https://wa.me/1111111?text=Hola,%20me%20gustaría%20consultar%20por%20un%20sitio%20web.%20¿Podemos%20hablar%20sobre%20ello?',
      '_blank'
    );
  };

  const openGmail = () => {
    window.open('mailto:tuemail@gmail.com');
  };

  return (
    <div className='flex fixed bottom-11 right-8 space-x-5'>
      <div
        className='transform hover:scale-110 bg-green-500 text-white rounded-full p-3 
        cursor-pointer shadow-md transition duration-300 hover:bg-green-600 scale-105 z-50'
        onClick={openWhatsApp}
      >
        <FaWhatsapp className='text-4xl' />
      </div>
      <div
        className='transform hover:scale-110 bg-blue-600 text-white rounded-full p-3 
        cursor-pointer shadow-md transition duration-300 hover:bg-red-600 scale-105 z-50'
        onClick={openGmail}
      >
        <FaEnvelope className='text-4xl' />
      </div>
    </div>
  );
}
