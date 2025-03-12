import ContactButtons from '@/components/ButtonWhatsapp/ContactButtons';
import { CammonSection } from '@/components/CammonSection/CammonSection';
import Image from 'next/image';
import React from 'react';

export default function Page() {
  return (
    <>
      <ContactButtons />

      <CammonSection />
      <section className='py-8 min-h-screen'>
        <div className='container mx-auto px-4'>
          <div className='text-center mb-8'>
            <h2 className='text-3xl font-semibold text-gray-900'>
              Conoce Nuestro Concesionario
            </h2>
            <p className='text-gray-600 mt-2 font-semibold '>
              Estamos comprometidos en brindarte la mejor experiencia en la
              búsqueda de tu automóvil ideal.
            </p>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 '>
            <div className='flex items-center  justify-center'>
              <Image
                className='rounded-lg shadow-lg'
                src='/fondoautos.png'
                alt='Vehículos'
                width={600}
                height={600}
              />
            </div>
            <div className='flex flex-col justify-center '>
              <div>
                <h3 className='text-2xl font-semibold text-gray-800 mb-4'>
                  Nuestra Filosofía
                </h3>
                <p className='text-gray-700 leading-relaxed mb-6'>
                  En nuestro concesionario, nos dedicamos a ofrecer una amplia
                  gama de vehículos de alta calidad, priorizando la satisfacción
                  del cliente en cada transacción.
                </p>
              </div>
              <div>
                <h3 className='text-2xl font-semibold text-gray-800 mb-4'>
                  Nuestro Equipo
                </h3>
                <p className='text-gray-700 leading-relaxed'>
                  Contamos con un equipo apasionado y experto listo para
                  asesorarte en la elección del automóvil perfecto para ti.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
