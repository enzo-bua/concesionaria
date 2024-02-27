import exterior2 from '../../public/exterior2.png';
import bora from '../../public/bora.png';
import bora1 from '../../public/bora1.png';
import bora2 from '../../public/bora2.png';
import bora3 from '../../public/bora3.png';
import bora5 from '../../public/bora5.png';
import polo from '../../public/polo.png';
import polo1 from '../../public/polo1.png';
import polo2 from '../../public/polo2.png';
import polo3 from '../../public/polo3.png';
import polo4 from '../../public/polo4.png';
import polo5 from '../../public/polo5.png';
import goltrend from '../../public/goltrend.png';
import goltrend1 from '../../public/goltrend1.png';
import goltrend2 from '../../public/goltrend2.png';
import goltrend3 from '../../public/goltrend3.png';
import goltrend4 from '../../public/goltrend4.png';
import corolla from '../../public/corolla.png';
import corolla1 from '../../public/corolla1.png';
import corolla2 from '../../public/corolla2.png';
import corolla3 from '../../public/corolla3.png';
import corolla4 from '../../public/corolla4.png';
import fordk from '../../public/fordk.png';
import chevroletagile1 from '../../public/chevroletagile1.png';
import chevroletagile2 from '../../public/chevroletagile2.png';
import chevroletagile3 from '../../public/chevroletagile3.png';
import chevroletagile4 from '../../public/chevroletagile4.png';
import cronos from '../../public/cronos.png';
import cronos1 from '../../public/cronos1.png';
import hiluksrv from '../../public/hiluksrv.png';
import hiluksrv1 from '../../public/hiluksrv1.png';
import hiluksrv2 from '../../public/hiluksrv2.png';
import hiluksrv3 from '../../public/hiluksrv3.png';
import hiluksrvautomatica from '../../public/hiluksrvautomatica.png';
import hiluksrvautomatica1 from '../../public/hiluksrvautomatica1.png';
import hiluksrvautomatica2 from '../../public/hiluksrvautomatica2.png';

import hiluksrvautomatica3 from '../../public/hiluksrvautomatica3.png';
import amarok from '../../public/amarok.png';
import amarok1 from '../../public/amarok1.png';
import amarok2 from '../../public/amarok2.png';
import amarok3 from '../../public/amarok3.png';
import vento from '../../public/vento.png';
import vento1 from '../../public/vento1.png';
import vento2 from '../../public/vento2.png';

const data = [
  {
    id: 1,
    marca: 'Volkswagen',
    modelo: 'Bora',
    descripcion: 'TRENDLINES C/GNC',
    precio: '8,000',
    transmision: 'Manual',
    combustible: 'Gasoil',
    km: ' 146,000',
    año: 2013,
    imagenes: [bora, bora1, bora2, bora3, bora5],
    detalle: 'Muy buen auto, la verdad que esta impecable cacron',
    enDescuento: true,
  },

  {
    id: 2,
    marca: 'Volkswagen',
    modelo: 'Polo',
    descripcion: 'COMFORTLINE',
    precio: '20,000',
    transmision: 'Manual',
    combustible: 'Nafta',
    km: '36,000',
    año: 2019,
    imagenes: [polo, polo1, polo2, polo3, polo4, polo5],
    detalle: 'Muy buen auto, la verdad que esta impecable cacron',
  },

  {
    id: 3,
    marca: 'Chevrolet',
    modelo: 'Agile',
    descripcion: 'LTZ',
    precio: '15,500',
    transmision: 'Manual',
    combustible: 'Nafta',
    km: '78,000',
    año: 2015,
    imagenes: [
      chevroletagile1,
      chevroletagile2,
      chevroletagile3,
      chevroletagile4,
    ],
    detalle: 'Excelente vehículo urbano, ideal para la ciudad y viajes cortos.',
    enDescuento: true,
  },
  {
    id: 4,
    marca: 'Fiat',
    modelo: 'Cronos',
    descripcion: 'Drive',
    precio: '18,200',
    transmision: 'Automático',
    combustible: 'Nafta',
    km: '44,000',
    año: 2018,
    imagenes: [cronos1, cronos],
    detalle: 'Espacioso y confortable, perfecto para viajes largos en familia.',
  },
  {
    id: 5,
    marca: 'Toyota',
    modelo: 'Corolla',
    descripcion: 'XLI',
    precio: '25,000',
    transmision: 'Automático',
    combustible: 'Nafta',
    km: '22,000',
    año: 2021,
    imagenes: [corolla, corolla1, corolla2, corolla3, corolla4],
    detalle:
      'Calidad y confiabilidad aseguradas, un vehículo elegante y moderno.',
  },
  {
    id: 6,
    marca: 'Ford',
    modelo: 'Ka',
    descripcion: 'SE Plus',
    precio: '12,800',
    transmision: 'Manual',
    combustible: 'Nafta',
    km: '50,000',
    año: 2017,
    imagenes: [fordk],
    detalle:
      'Compacto y ágil, perfecto para moverse en la ciudad con facilidad.',
    enDescuento: true,
  },
  {
    id: 7,
    marca: 'Toyota',
    modelo: 'Hilux',
    descripcion: 'SRV',
    precio: '38,500',
    transmision: 'Automática',
    combustible: 'Diesel',
    km: '60,000',
    año: 2019,
    imagenes: [hiluksrv, hiluksrv1, hiluksrv2, hiluksrv3],
    detalle:
      'Potencia y resistencia para cualquier terreno, ideal para aventuras.',
  },
  {
    id: 8,
    marca: 'Toyota',
    modelo: 'Hilux',
    descripcion: 'SRV Automática',
    precio: '42,000',
    transmision: 'Automática',
    combustible: 'Diesel',
    km: '30,000',
    año: 2020,
    imagenes: [
      hiluksrvautomatica1,
      hiluksrvautomatica2,
      hiluksrvautomatica,
      hiluksrvautomatica3,
    ],
    detalle:
      'Comodidad y tecnología, una compañera perfecta para el trabajo y el ocio.',
  },
  {
    id: 9,
    marca: 'Volkswagen',
    modelo: 'Amarok',
    descripcion: 'Highline',
    precio: '48,000',
    transmision: 'Automática',
    combustible: 'Diesel',
    km: '20,000',
    año: 2022,
    imagenes: [amarok, amarok1, amarok2, amarok3],
    detalle:
      'La mezcla perfecta entre confort y robustez, lista para cualquier desafío.',
    enDescuento: true,
  },
  {
    id: 10,
    marca: 'Volkswagen',
    modelo: 'Vento',
    descripcion: 'Highline',
    precio: '28,500',
    transmision: 'Automática',
    combustible: 'Nafta',
    km: '15,000',
    año: 2020,
    imagenes: [vento, vento1, vento2],
    detalle:
      'Elegancia y potencia en un vehículo que se destaca en cualquier situación.',
  },
  {
    id: 11,
    marca: 'Volkswagen',
    modelo: 'Gol Trend',
    descripcion: 'Trendline',
    precio: '14,500',
    transmision: 'Manual',
    combustible: 'Nafta',
    km: '52,000',
    año: 2017,
    imagenes: [goltrend1, goltrend2, goltrend3, goltrend, , goltrend4],
    detalle: 'Compacto y económico, ideal para desplazamientos en la ciudad.',
  },
];

export default data;
