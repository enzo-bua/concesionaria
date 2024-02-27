'use client';
import React, { useState } from 'react';
import { Modals } from '../Modal/Modal';
import Filtros from './Filtros';
import useFilter from '@/hooks/useFilter';

export default function FiltroButton() {
  const { filters, setFilters } = useFilter();

  const [openModal, setOpenModal] = useState(false);
  const handleCloseModal = () => setOpenModal(false);

  const deleteFilters = () => setFilters([]);

  return (
    <div className='flex justify-center mt-4'>
      <button
        className='px-4 py-2 transition duration-300'
        onClick={() => setOpenModal(true)}
      >
        Aplicar Filtros
      </button>
      {filters.marca !== 'all' &&
        filters.marca !== undefined &&
        filters.modelo !== 'all' && (
          <button
            className='px-4 py-2 bg-red-700 text-white transition duration-300 hover:text-red-600 border-red-500 ml-10'
            onClick={deleteFilters}
          >
            Eliminar filtros
          </button>
        )}

      {openModal && (
        <Modals title='FILTROS' show={true} handleClose={handleCloseModal}>
          <Filtros handleCloseModal={handleCloseModal} />
        </Modals>
      )}
    </div>
  );
}
