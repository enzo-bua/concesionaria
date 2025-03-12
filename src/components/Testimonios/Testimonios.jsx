'use client';
import React from 'react';

export default function Testimonios() {
  return (
    <section className='bg-gray-100 py-16 px-4 md:px-0 mt-5'>
      <div className='container mx-auto'>
        <div className='text-center'>
          <h2 className='text-3xl font-bold'>Testimonios</h2>
          <h6 className='text-gray-600 text-sm mb-5'>
            Algunos de nuestros clientes
          </h6>
          <div className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3'>
            <div className='bg-white rounded-xl shadow-md overflow-hidden ml-10'>
              <div className='w-24 h-24 mx-auto mt-4 rounded-full overflow-hidden'>
                <img
                  className='object-cover w-full h-full'
                  src='ava-1.jpg'
                  alt={`Imagen de`}
                />
              </div>
              <div className='p-4'>
                <div className='uppercase tracking-wide text-sm text-indigo-500 font-semibold'>
                  Testimonio
                </div>
                <p className='mt-2 text-gray-500'>Juan Pérez</p>
                <div className='mt-4'>
                  <p className='text-base font-semibold'>
                    Estoy encantado con mi nuevo auto. La suavidad al conducir y
                    su potencia son increíbles. Se siente como volar sobre el
                    asfalto. Además, el diseño interior es elegante y cómodo,
                    cada viaje se convierte en una experiencia asombrosa.
                  </p>
                </div>
              </div>
            </div>
            <div className='bg-white rounded-xl shadow-md overflow-hidden'>
              <div className='w-24 h-24 mx-auto mt-4 rounded-full overflow-hidden'>
                <img
                  className='object-cover w-full h-full'
                  src='ava-2.jpg'
                  alt={`Imagen de`}
                />
              </div>
              <div className='p-4'>
                <div className='uppercase tracking-wide text-sm text-indigo-500 font-semibold'>
                  Testimonio
                </div>
                <p className='mt-2 text-gray-500'>María Rodríguez</p>
                <div className='mt-4'>
                  <p className='text-base font-semibold'>
                    El servicio al cliente en esta concesionaria es excepcional.
                    Me ayudaron a encontrar el auto perfecto dentro de mi
                    presupuesto y no podría estar más feliz con mi elección.
                    Todo el proceso fue rápido y eficiente.
                  </p>
                </div>
              </div>
            </div>
            <div className='bg-white rounded-xl shadow-md overflow-hidden mr-10'>
              <div className='w-24 h-24 mx-auto mt-4 rounded-full overflow-hidden'>
                <img
                  className='object-cover w-full h-full'
                  src='ava-3.jpg'
                  alt={`Imagen de`}
                />
              </div>
              <div className='p-4'>
                <div className='uppercase tracking-wide text-sm text-indigo-500 font-semibold'>
                  Testimonio
                </div>
                <p className='mt-2 text-gray-500'>Chris Johnson</p>
                <div className='mt-4'>
                  <p className='text-base font-semibold'>
                    Mi experiencia comprando un auto en esta concesionaria fue
                    fantástica. El personal era conocedor, amigable y servicial.
                    Recomiendo encarecidamente este lugar a cualquiera que
                    busque su auto soñado.
                  </p>
                </div>
              </div>
            </div>
            {/* Repite las tarjetas adicionales aquí */}
          </div>
        </div>
      </div>
    </section>
  );
}
