'use client';
import { FilterContext } from '@/context/FilterContext';
import { useContext } from 'react';

function useFilter() {
  const { filters, setFilters } = useContext(FilterContext);
  console.log(filters);
  const filtersData = (data) => {
    let filteredData = data.filter((dat) => {
      console.log(dat);
      const marcaCondition =
        filters.marca === 'all' ||
        filters.marca === '' ||
        console.log(dat.marca === filters.marca);
      const modeloCondition =
        filters.modelo === 'all' ||
        filters.modelo === '' ||
        dat.modelo === filters.modelo;
      const precioCondition =
        filters.precio === 'igual' ||
        filters.precio === 'ASC' ||
        filters.precio === 'DESC' ||
        parseFloat(dat.precio) === parseFloat(filters.precio);
      console.log(modeloCondition);
      return marcaCondition && modeloCondition && precioCondition;
    });

    if (filters.precio === 'ASC') {
      filteredData.sort((a, b) => parseFloat(a.precio) - parseFloat(b.precio));
    } else if (filters.precio === 'DESC') {
      filteredData.sort((a, b) => parseFloat(b.precio) - parseFloat(a.precio));
    }

    return filteredData;
  };

  return { filtersData, filters, setFilters };
}

export default useFilter;
