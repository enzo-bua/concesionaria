import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaCalendarAlt, FaGasPump, FaTachometerAlt } from 'react-icons/fa';

const CarCard = (props) => {
  const {
    id,
    marca,
    modelo,
    precio,
    año,
    km,
    combustible,
    imagenes,
    enDescuento,
  } = props;
  console.log(imagenes);
  return (
    <Link href={`/autos/${id}`}>
      <div className='bg-white shadow-md overflow-hidden rounded-lg transform transition-transform duration-300 hover:scale-105 relative'>
        <div className='relative'>
          {enDescuento && (
            <div className='absolute top-0 left-0 bg-red-600 text-white font-semibold py-1 px-2 rounded-tr-lg'>
              <p className='text-xs'>Descuento</p>
            </div>
          )}
          <div className='w-full h-full flex items-center justify-center'>
            <img
              src={imagenes[0]?.src}
              alt={marca}
              className='object-cover h-56 w-full'
            />
            {/* <Image
              src={imagenes[0].src}
              alt='Imagen'
              className='object-cover h-56 w-full'
              width={400}
              height={400}
            /> */}
          </div>
        </div>
        <div className='mt-2'>
          <h4 className='text-lg font-semibold text-center'>
            {marca} {modelo}
          </h4>
          <h6 className='text-center text-gray-600 text-lg mb-2'>
            ${precio} <span>USD</span>
          </h6>

          <div className='flex justify-center items-center mb-2 gap-1'>
            <FaCalendarAlt className='text-gray-700 ' />
            <span className='text-gray-700'>{año}</span>
            <span className='text-gray-700 mx-1'>|</span>
            <FaTachometerAlt className='text-gray-700' />
            <span className='text-gray-700'>{km}</span>
            <span className='text-gray-700 mx-1'>|</span>
            <FaGasPump className='text-gray-700' />
            <span className='text-gray-700'>{combustible}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CarCard;
