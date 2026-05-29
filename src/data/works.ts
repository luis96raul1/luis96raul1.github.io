import footloose1 from '../assets/images/footloose-main.png';
import footloose2 from '../assets/images/footloose-store.png';
import codeable1 from '../assets/images/CodeableTesting1.png';
import codeable2 from '../assets/images/CodeableTesting2.png';

export type Work = {
  id: string;
  /** translation key under `works.*` */
  key: string;
  /** External link to the live project, if any */
  url?: string;
  /** "Year" or status badge displayed under the title */
  year: string;
  /** Tech chips */
  stack: string[];
  /** Two screenshots — back + front overlap. Optional until art is ready. */
  shots?: [string, string];
};

export const works: Work[] = [
  {
    id: 'rainfocus',
    key: 'rainfocus',
    url: 'https://www.rainfocus.com/',
    year: '2023 — present',
    stack: ['Svelte', 'Web Components', 'JavaScript', 'CSS']
  },
  {
    id: 'leadcadi',
    key: 'leadcadi',
    year: '2024 — present',
    stack: ['Next.js', 'React', 'TypeScript', 'SSR']
  },
  {
    id: 'dealerpro',
    key: 'dealerpro',
    year: '2022 — 2023',
    stack: ['React', 'Scala', 'Play Framework']
  },
  {
    id: 'footloose',
    key: 'footloose',
    url: 'https://www.footloose.pe/',
    year: '2022',
    stack: ['VTEX', 'React', 'Vite', 'SCSS'],
    shots: [footloose1, footloose2]
  },
  {
    id: 'codeable',
    key: 'codeable',
    url: 'https://www.codeable.la/',
    year: '2022',
    stack: ['React', 'Ruby on Rails', 'PostgreSQL'],
    shots: [codeable1, codeable2]
  }
];
