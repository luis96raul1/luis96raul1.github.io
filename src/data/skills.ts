import javascript from '../assets/images/javaScriptLogo.png';
import rails from '../assets/images/rubyOnRailsLogo.png';
import github from '../assets/images/githubLogo.png';
import scrum from '../assets/images/scrumImage.png';

export type Skill = {
  id: string;
  /** translation key under `skills.*` */
  key: string;
  icon: string;
  tags: string[];
};

export const skills: Skill[] = [
  {
    id: 'frontend',
    key: 'frontend',
    icon: javascript,
    tags: ['React', 'Svelte', 'Next.js', 'TypeScript', 'Tailwind']
  },
  {
    id: 'backend',
    key: 'backend',
    icon: rails,
    tags: ['Scala', 'Play Framework', 'Ruby on Rails', 'REST APIs']
  },
  {
    id: 'github',
    key: 'github',
    icon: github,
    tags: ['Git', 'GitHub Actions', 'GitHub Pages', 'CI/CD']
  },
  {
    id: 'agile',
    key: 'agile',
    icon: scrum,
    tags: ['Scrum', 'Sprints', 'Standups', 'Retros']
  }
];
