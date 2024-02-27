import { FilterContext } from '@/context/FilterContext';
import data from '@/lib/data';
import React, { useContext, useState } from 'react';
import { FaArrowDown, FaArrowUp, FaArrowsAltH } from 'react-icons/fa';

export default function Filtros({ handleCloseModal }) {
  const { filters, setFilters } = useContext(FilterContext);
  const [marcaSeleccionada, setMarcaSeleccionada] = useState('');
  const [modeloIngresado, setModeloIngresado] = useState('');
  const [ordenPrecio, setOrdenPrecio] = useState('');

  const marcasUnicas = [...new Set(data.map((dat) => dat.marca))];
  const modelosUnicos = [
    ...new Set(
      data
        .filter((dat) => dat.marca === marcaSeleccionada)
        .map((dat) => dat.modelo)
    ),
  ];

  const handleMarcaChange = (e) => {
    const newMarca = e.target.value;
    setMarcaSeleccionada(newMarca);
  };

  const handleModeloChange = (e) => {
    const newModelo = e.target.value;
    setModeloIngresado(newModelo);
  };

  const handleOrdenChange = (orden) => {
    setOrdenPrecio(orden);
  };

  const aplicarFiltros = () => {
    // Lógica para aplicar los filtros
    setFilters((prevState) => ({
      ...prevState,
      marca: marcaSeleccionada,
      modelo: modeloIngresado,
      precio: ordenPrecio,
    }));
    handleCloseModal();
  };
  return (
    <div className='bg-gray-100 p-4 rounded-md shadow-md'>
      <div className='flex flex-col space-y-4'>
        <div className='flex flex-col'>
          <label htmlFor='marca' className='text-gray-700'>
            Marca
          </label>
          <select
            id='marca'
            className='mt-1 rounded-md h-10 border border-black  focus:border-indigo-500 focus:ring-indigo-500'
            onChange={handleMarcaChange}
            value={marcaSeleccionada}
          >
            <option value='all'>Seleccione una marca</option>
            {marcasUnicas.map((marca) => (
              <option key={marca} value={marca}>
                {marca}
              </option>
            ))}
          </select>
        </div>

        <div className='flex flex-col'>
          <label htmlFor='modelo' className='text-gray-700'>
            Modelo
          </label>
          <select
            id='modelo'
            className='mt-1 rounded-md h-10 border border-black  focus:border-indigo-500 focus:ring-indigo-500'
            onChange={handleModeloChange}
            value={modeloIngresado}
            disabled={marcaSeleccionada === ' '}
          >
            <option value='all'>Seleccione una modelo</option>
            {modelosUnicos.map((modelo) => (
              <option key={modelo} value={modelo}>
                {modelo}
              </option>
            ))}
          </select>
        </div>

        <div className='flex flex-col'>
          <label className='text-gray-700'>Ordenar por precio:</label>
          <div className='flex mt-1'>
            <button
              onClick={() => handleOrdenChange('ASC')}
              className={`px-3 py-1 mr-2 rounded-md ${
                ordenPrecio === 'ASC'
                  ? 'bg-indigo-500 text-white hover:bg-indigo-600'
                  : 'bg-gray-300 text-gray-600 hover:bg-gray-400'
              }`}
            >
              <FaArrowUp />
            </button>
            <button
              onClick={() => handleOrdenChange('DESC')}
              className={`px-3 py-1 rounded-md mr-2 ${
                ordenPrecio === 'DESC'
                  ? 'bg-indigo-500 text-white hover:bg-indigo-600'
                  : 'bg-gray-300 text-gray-600 hover:bg-gray-400'
              }`}
            >
              <FaArrowDown />
            </button>
            <button
              onClick={() => handleOrdenChange('IGUAL')}
              className={`px-3 py-1 rounded-md ${
                ordenPrecio === 'IGUAL'
                  ? 'bg-indigo-500 text-white hover:bg-indigo-600'
                  : 'bg-gray-300 text-gray-600 hover:bg-gray-400'
              }`}
            >
              <FaArrowsAltH />
            </button>
          </div>
        </div>

        <button
          onClick={aplicarFiltros}
          className='bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 hover:text-white mt-2'
        >
          Aplicar filtros
        </button>
      </div>
    </div>
  );
}
