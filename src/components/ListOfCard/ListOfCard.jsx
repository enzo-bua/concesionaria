'use client';
import React from 'react';
import CarCard from '../Card/Card';
import { usePathname } from 'next/navigation';
import { api } from '@/api';

export default function ListOfCard({ data, slice }) {
  const pathname = usePathname();
  // let itemsToRender = data; // Por defecto, renderizar todos los elementos

  // // Si se proporciona el valor de 'slice', limitar los elementos a renderizar
  // if (slice !== undefined && slice >= 0) {
  //   itemsToRender = data.slice(0, slice);
  // }
  // const autos = await api.autos.list();
  // console.log(autos);
  return (
    <section className='py-2'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div
          className={`mt-6 grid grid-cols-1 md:grid-cols-2 ${
            pathname === '/' ? 'lg:grid-cols-4' : 'lg:grid-cols-3'
          } gap-8`}
        >
          {data && data?.map((auto) => <CarCard key={auto.id} {...auto} />)}
        </div>
      </div>
    </section>
  );
}
