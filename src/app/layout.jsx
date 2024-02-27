import Layout from '@/components/Layout/Layout';
import { FiltersProvider } from '@/context/FilterContext';
import { montserrat } from '@/ui/fonts';
import '@/ui/global.css';
export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={`${montserrat.className} antialiased`}>
        <Layout>
          <FiltersProvider>{children}</FiltersProvider>
        </Layout>
      </body>
    </html>
  );
}
