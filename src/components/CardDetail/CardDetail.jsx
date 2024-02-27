'use client';

import data from '@/lib/data';
import React from 'react';
import {
  FaCalendarAlt,
  FaCar,
  FaGasPump,
  FaTachometerAlt,
} from 'react-icons/fa';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from 'next/image';
import ListOfCardSimilar from '../ListOfCardSimilar/ListOfCardSimilar';
import BottonWhatsapp from '../ButtonWhatsapp/BottonWhatsapp';

export default function CardDetail({ id }) {
  const singleCarItem = data.find((item) => String(item.id) === id);
  const marcaIgual = data.filter(
    (item) => item.marca === singleCarItem.marca && item.id !== singleCarItem.id
  );
  const {
    marca,
    modelo,
    precio,
    transmision,
    combustible,
    km,
    año,
    imagenes,
    descripcion,
    detalle,
  } = singleCarItem;

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1800,
  };
  return (
    <>
      <div className='py-10 min-h-screen'>
        <section className='container  '>
          <div className='grid grid-cols-1 lg:grid-cols-2 '>
            <div className='lg:col-span-1 w-[900px] flex justify-center'>
              <Slider {...settings} className='w-[420px] '>
                {imagenes.map((img, index) => (
                  <div
                    key={index}
                    className='grid justify-center w-full h-[500px]'
                  >
                    <Image
                      height={100}
                      width={400}
                      src={img.src}
                      alt='Imagen'
                      className='rounded-lg shadow-sm object-cover object-center w-full h-full'
                    />
                  </div>
                ))}
              </Slider>
            </div>

            <div className='lg:col-span-1  w-[700px] '>
              <div className='bg-slate-100 rounded-lg shadow-md overflow-hidden'>
                <div className='p-6'>
                  <h2 className='text-4xl font-bold'>
                    {marca} {modelo}
                  </h2>

                  <h2 className='text-lg mt-2 font-semibold mb-4'>
                    {descripcion}
                  </h2>
                  <hr className='my-4' />
                  <div className='flex justify-between items-center'>
                    <h6 className='font-bold text-2xl'>${precio} USD</h6>
                  </div>
                  <div className='grid grid-cols-2 text-xl gap-4 text-gray-700 mt-4'>
                    <div className='flex items-center space-x-2'>
                      <FaCalendarAlt className='text-xl' />
                      <span className='text-lg'>{año}</span>
                    </div>

                    <div className='flex items-center space-x-2'>
                      <FaTachometerAlt className='text-xl' />
                      <span className='text-lg'>{km} KM</span>
                    </div>

                    <div className='flex items-center space-x-2'>
                      <FaGasPump className='text-xl' />
                      <span className='text-lg'>{combustible}</span>
                    </div>

                    <div className='flex items-center space-x-2'>
                      <FaCar className='text-xl' />
                      <span className='text-lg'>{transmision}</span>
                    </div>
                  </div>
                </div>
              </div>
              <h2 className='mt-4 font-semibold text-lg'>Detalle</h2>
              <hr />
              <p className='mt-2'>{detalle}</p>
              <div className=' mt-12 animate-bounce'>
                <BottonWhatsapp marca={marca} modelo={modelo} />
              </div>
            </div>
          </div>
        </section>
        <ListOfCardSimilar marcaIgual={marcaIgual} />
      </div>
    </>
  );
}
