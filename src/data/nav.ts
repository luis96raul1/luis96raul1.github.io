export const navItems = [
  { id: 'work',    index: '01', key: 'header.work' },
  { id: 'skills',  index: '02', key: 'header.skills' },
  { id: 'about',   index: '03', key: 'header.about' },
  { id: 'contact', index: '04', key: 'header.contact' }
] as const;

export const sectionIds = navItems.map((n) => n.id);
