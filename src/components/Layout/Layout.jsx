'use client';
import NavBar from './NavBar';
import Footer from './Footer';
import Header from './Header';
import { usePathname } from 'next/navigation';
export default function Layout({ children }) {
  const pathname = usePathname();
  return (
    <>
      {/* {pathname === '/' && <Header />} */}
      <NavBar />
      {children}
      <Footer />
    </>
  );
}
