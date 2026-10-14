export interface NavLink {
  href: string;
  labelKey: string;
}

export const navLinks: NavLink[] = [
  { href: '#home', labelKey: 'nav.home' },
  { href: '#services', labelKey: 'nav.services' },
  { href: '#residential', labelKey: 'nav.residential' },
  { href: '#commercial', labelKey: 'nav.commercial' },
  { href: '#projects', labelKey: 'nav.projects' },
  { href: '#about', labelKey: 'nav.about' },
  { href: '#contact', labelKey: 'nav.contact' },
];
