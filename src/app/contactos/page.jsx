'use client';
import { CammonSection } from '@/components/CammonSection/CammonSection';
import FormContacto from '@/components/Forms/FormContacto';
import Maps from '@/components/GoogleMaps/Maps';
import React from 'react';

function page() {
  return (
    <>
      <CammonSection />
      <div className='container mx-auto flex flex-col lg:flex-row mb-32'>
        <div className='lg:w-1/2'>
          <Maps />
        </div>

        <div className='lg:w-1/2 p-4 mt-11 grid items-center'>
          <h2 className='text-center font-semibold text-lg'>
            ¡No dudes en ponerte en contacto con nosotros!
          </h2>
          <div className='flex justify-center items-center lg:text-left'>
            <div className=' rounded-lg p-6 w-full lg:w-4/6 justify-center grid'>
              <FormContacto />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default page;
