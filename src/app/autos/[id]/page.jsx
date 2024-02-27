import { CammonSection } from '@/components/CammonSection/CammonSection';
import CardDetail from '@/components/CardDetail/CardDetail';

export default function page({ params }) {
  const { id } = params;
  return (
    <>
      <CammonSection />
      <CardDetail id={id} />;
    </>
  );
}
