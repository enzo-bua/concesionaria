'use client';
import { CammonSection } from '@/components/CammonSection/CammonSection';
import FiltroButton from '@/components/Filtros/FiltroButton';
import ListOfCard from '@/components/ListOfCard/ListOfCard';
import useFilter from '@/hooks/useFilter';
import data from '@/lib/data';

export default function Page() {
  const { filters, filtersData } = useFilter();
  const autosFiltrados =
    filters.marca !== 'all' &&
    filters.modelo !== 'all' &&
    filters.precio !== 'IGUAL'
      ? filtersData(data)
      : data;

  console.log(autosFiltrados);
  return (
    <>
      <CammonSection />
      <FiltroButton />
      <ListOfCard data={data} />
    </>
  );
}
