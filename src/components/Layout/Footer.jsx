import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';

export default function Footer() {
  return (
    <div className='w-full bg-slate-700 text-gray-300 py-y px-2'>
      <div className='flex flex-col max-w-[1240px] px-2 py-4 mx-auto justify-between sm:flex-row text-center text-white'>
        <p className='py-4'>NOSOTROS FOOTER</p>
        <p className='py-4'>NOSOTROS &copy; 2025</p>
        <div className='flex justify-between sm:w-[300px] pt-4 text-2xl'>
          <a href='https://www.linkedin.com/' target='_blank' rel='noreferrer'>
            <FaLinkedin />
          </a>
          <a href='https://www.instagram.com/' target='_blank' rel='noreferrer'>
            <FaInstagram />
          </a>
          <FaFacebook />

          <FaTwitter />
          {/* <FaTwitch /> */}
          {/* <FaGithub /> */}
        </div>
      </div>
    </div>
  );
}
