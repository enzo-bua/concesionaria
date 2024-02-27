'use client';

import { api } from '@/api';
import ContactButtons from '@/components/ButtonWhatsapp/ContactButtons';
import Descuento from '@/components/Descuento/Descuento';
import Hero from '@/components/Hero/Hero';
import Testimonios from '@/components/Testimonios/Testimonios';
import Slider from 'react-slick';
export default async function page() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2700,
  };
  return (
    <>
      <Hero />
      <Descuento />
      <ContactButtons />
      <Testimonios />
    </>
  );
}
