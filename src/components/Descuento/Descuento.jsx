'use client';
import ListOfCard from '../ListOfCard/ListOfCard';
import data from '@/lib/data';

export default function Descuento() {
  const autosDescuento = data.filter((items) => items.enDescuento === true);

  return (
    <>
      <div className='bg-gray-100 p-10 rounded-lg shadow-lg text-center mt-5'>
        <h2 className='text-3xl font-semibold mb-6'>¡Autos en Descuento!</h2>
        <p className='text-lg text-gray-600 mb-8'>
          ¡Aprovecha estas ofertas especiales en autos seleccionados!
        </p>
        <div className='grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3'></div>
      </div>

      <ListOfCard data={autosDescuento} slice={4} />
    </>
  );
}
