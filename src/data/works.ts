import footloose1 from '../assets/images/footloose-main.png';
import footloose2 from '../assets/images/footloose-store.png';
import codeable1 from '../assets/images/CodeableTesting1.png';
import codeable2 from '../assets/images/CodeableTesting2.png';
import personal1 from '../assets/images/personalPage1.png';
import personal2 from '../assets/images/personalPage2.png';

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
  /** Two screenshots — back + front overlap */
  shots: [string, string];
};

export const works: Work[] = [
  {
    id: 'footloose',
    key: 'footloose',
    url: 'https://www.footloose.pe/',
    year: '2024 — present',
    stack: ['VTEX', 'React', 'TypeScript', 'SCSS'],
    shots: [footloose1, footloose2]
  },
  {
    id: 'codeable',
    key: 'codeable',
    url: 'https://www.codeable.la/',
    year: '2022',
    stack: ['React', 'Ruby on Rails', 'PostgreSQL'],
    shots: [codeable1, codeable2]
  },
  {
    id: 'personal',
    key: 'personal',
    year: 'Ongoing',
    stack: ['React', 'Vite', 'Framer Motion', 'SCSS'],
    shots: [personal1, personal2]
  }
];
