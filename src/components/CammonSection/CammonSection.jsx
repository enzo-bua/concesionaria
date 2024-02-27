export function CammonSection({ title }) {
  const sectionStyle = {
    backgroundImage: 'url(/cammonsection.png)',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'fixed', // Esta propiedad mantiene la imagen fija
  };

  return (
    <section
      className='relative bg-gradient-to-b from-opacity-60 to-opacity-60 from-blue-900 to-blue-900 mb-5 py-28'
      style={sectionStyle}
    >
      <div className='container mx-auto text-center'>
        <h1 className='text-blue-500 font-bold text-6xl'>{title}</h1>
      </div>
    </section>
  );
}
