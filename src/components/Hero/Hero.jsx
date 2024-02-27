'use client';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function Hero() {
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
      <section className='relative min-h-[600px] grid grid-cols-1 xl:grid-cols-8 overflow-hidden'>
        {/* Carrusel */}
        <div className='absolute inset-0 z-0 h-screen'>
          <Slider {...settings}>
            <div>
              <img
                src='fondoautos.png'
                alt='Imagen 2'
                className='w-full h-full object-cover  opacity-70 '
              />
            </div>
          </Slider>
        </div>

        {/* Contenido */}
        <div className='md:col-span-8 flex items-start mt-20 justify-center text-center z-10 relative'>
          <div className='text-black'>
            <h1 className='text-4xl md:text-5xl xl:text-6xl font-bold leading-[4.5rem] xl:leading-[5rem]'>
              ¡El auto que estás necesitando!
            </h1>
            <p className='text-xl md:text-3xl xl:text-5xl text-primary py-2 px-6 mt-2 font-bold'>
              Concesionaria AUTOPAR
            </p>
            <p className='text-lg md:text-xl xl:text-2xl font-bold mt-2'>
              Autos exclusivos.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
