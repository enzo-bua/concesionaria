import React from 'react';
import ListOfCard from '../ListOfCard/ListOfCard';

export default function ListOfCardSimilar({ marcaIgual }) {
  return (
    marcaIgual.length > 0 && (
      <div className='py-12'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-6'>
            <h2 className='text-4xl font-bold'>
              Recomendados de la misma marca
            </h2>
            <p className='text-gray-600 font-semibold'>
              Explora estos productos similares de la misma marca
            </p>
          </div>
          <ListOfCard data={marcaIgual} slice={3} />
        </div>
      </div>
    )
  );
}
