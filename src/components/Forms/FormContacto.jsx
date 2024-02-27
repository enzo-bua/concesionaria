'use client';
import emailjs from '@emailjs/browser';
import { useRef, useState } from 'react';
export default function FormContacto() {
  const form = useRef();
  const [email, setEmail] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_aagjvii',
        'template_ui3dxgm',
        form.current,
        'dwMYj6EdoUkiTTpm2'
      )
      .then(() => {
        setEmail('Mensaje enviado con exito !!!');
        resetForm();
      })
      .catch(() => {
        setEmail('Error al enviar el mensaje');
      });
  };

  const resetForm = () => {
    setTimeout(() => {
      form.current.reset();
      setEmail('');
    }, 3000);
  };
  return (
    <div className='flex justify-center items-center lg:text-left  w-[350px] '>
      <form
        onSubmit={sendEmail}
        ref={form}
        className='grid sm:flex-row mt-4 w-full'
      >
        <input
          className='w-full p-2 mr-4 border border-black rounded-md mb-6 text-black'
          type='text'
          placeholder='ingrese su nombre'
          id='nombre'
          name='user_name'
        />
        <input
          className='w-full p-2 mr-4 border border-black rounded-md mb-8 text-black'
          type='email'
          id='email'
          name='user_email'
          required
          placeholder='ingrese su email'
        />
        <textarea
          className='w-full p-2 mr-4 border border-black rounded-md mb-6 text-black'
          type='email'
          id='mensaje'
          name='message'
          required
          placeholder='ingrese su consulta...'
        />
        {email && (
          <p className='text-center text-white mb-2 font-bold'>{email}</p>
        )}

        <button className='p-2 mb-4'>Enviar</button>
      </form>
    </div>
  );
}
