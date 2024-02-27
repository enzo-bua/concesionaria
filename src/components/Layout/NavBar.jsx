'use client';
import { useState, useEffect } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import NavLinks from './NavLinks';
import Link from 'next/link';
export default function NavBar() {
  const [nav, setNav] = useState(false);
  const [scroll, setscrool] = useState(0);
  const handleClick = () => setNav(!nav);
  const handleClose = () => setNav(false);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [scroll]);
  return (
    <div className='w-full h-[80px] bg-gradient-to-r from-gray-900 to-gray-400 text-white sticky top-0 drop-shadow-lg z-50'>
      <div className='px-4 flex justify-center items-center w-full h-full'>
        <Link href='/'>
          <h1
            className='text-3xl  mr-8 sm:text-4xl transform transition-transform hover:scale-105 rounded-lg'
            onClick={() => setscrool(scroll + 1)}
          >
            Concesionaria
          </h1>
        </Link>
        <NavLinks />

        <div className='md:hidden mr-4' onClick={handleClick}>
          {!nav ? (
            <GiHamburgerMenu className='w-5' />
          ) : (
            <AiOutlineCloseCircle className='w-5' />
          )}
        </div>
      </div>

      <ul className={!nav ? 'hidden' : 'absolute bg-zinc-200 w-full px-8'}>
        <li className='border-b-2 border-zinc-300 w-full'>
          <a onClick={handleClose} href='/home'>
            Home
          </a>
        </li>
        <li className='border-b-2 border-zinc-300 w-full'>
          <a onClick={handleClose} href='#nosotros'>
            Propiedades
          </a>
        </li>
        <li className='border-b-2 border-zinc-300 w-full'>
          <a onClick={handleClose} href='#proyectos'>
            Nosotros
          </a>
        </li>
        <li className='border-b-2 border-zinc-300 w-full'>
          <a onClick={handleClose} href='#planes'>
            Ubicacion
          </a>
        </li>
        <li className='border-b-2 border-zinc-300 w-full'>
          <a onClick={handleClose} href='#contactos'>
            Contacto
          </a>
        </li>
      </ul>
    </div>
  );
}
