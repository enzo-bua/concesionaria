import Link from 'next/link';
import { usePathname } from 'next/navigation';

const links = [
  { name: 'Home', href: '/' },
  { name: 'Nosotros', href: '/nosotros' },
  {
    name: 'Autos',
    href: '/autos',
  },
  { name: 'Contactos', href: '/contactos' },
];

export default function NavLinks() {
  const pathname = usePathname();
  return (
    <>
      <div className='flex items-center justify-between '>
        <ul className=' hidden md:flex space-x-8 xl:ml-[600px] text-lg'>
          {links.map((link) => {
            return (
              <li
                key={link.name}
                className='ml-auto transform transition-transform hover:scale-110 rounded-xl '
              >
                <Link
                  key={link.name}
                  href={link.href}
                  className={`${
                    pathname === link.href
                      ? ' text-white font-bold text-xl'
                      : ''
                  }`}
                >
                  {link.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}
