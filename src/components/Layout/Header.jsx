import React from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { FaInstagram, FaFacebook, FaWhatsapp } from 'react-icons/fa';

export default function Header() {
  return (
    <div className='bg-blue-900 text-white py-2'>
      <div className='container'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
          <div className='flex items-center'>
            <span className='ml-10'>Belgrano, Buenos Aires</span>
            <span className='flex items-center gap-1 ml-2'>
              <i className='ri-phone-fill'></i>
            </span>
          </div>

          <div className='flex items-center justify-end gap-4 mr-14'>
            <a
              href='https://www.facebook.com/'
              target='_blank'
              rel='noopener noreferrer'
              className='flex items-center gap-1'
            >
              <FaWhatsapp className='text-xl' />
            </a>
            <a
              href='https://www.instagram.com/'
              target='_blank'
              rel='noopener noreferrer'
              className='flex items-center gap-1'
            >
              <FaInstagram className='text-xl' />
            </a>
            <a
              href='https://www.facebook.com/'
              target='_blank'
              rel='noopener noreferrer'
              className='flex items-center gap-1'
            >
              <FaFacebook className='text-xl' />
            </a>
            <a
              href='https://www.facebook.com/'
              target='_blank'
              rel='noopener noreferrer'
              className='flex items-center gap-1'
            >
              <AiOutlineMail box className='text-xl' />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
