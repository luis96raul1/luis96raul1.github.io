import { useContext } from 'react';
import styled from 'styled-components';
import { languageContext } from './contexts/LanguageContext';

export const HeaderLink = styled.a`
  cursor: pointer;
  text-decoration: none;
  color: var(--text-muted, #6B6B6B);
  font-family: var(--font-body, 'Outfit', system-ui, sans-serif);
  font-size: 0.82rem;
  font-weight: 400;
  letter-spacing: 0.04em;
  padding: 0.4rem 0.6rem;
  border-radius: 6px;
  position: relative;
  transition: color 0.18s ease, background 0.18s ease;
  display: inline-block;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0.6rem;
    right: 0.6rem;
    height: 1.5px;
    background: var(--accent, #5CB1B5);
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.25s cubic-bezier(0.4, 0, 0.2, 1);
    border-radius: 2px;
  }

  &:hover {
    color: var(--text, #1A1A1A);
  }

  &:hover::after {
    transform: scaleX(1);
  }

  &:visited {
    color: var(--text-muted, #6B6B6B);
  }
`;

interface HeaderOptionsProps {
  menuOpen?: boolean;
}

export const HeaderOptions = ({ menuOpen }: HeaderOptionsProps) => {
  const { language, setLanguage } = useContext(languageContext);

  const handleClass = (container: string): string => {
    return `${container} animate__animated ${menuOpen ? 'animate__slideInRight' : 'animate__slideOutLeft'} mobile`;
  }

  return (
    <>
      <HeaderLink className={handleClass('c1')} onClick={() => setLanguage(language === 'es' ? 'en' : 'es')}>
        {language === 'es' ? 'English' : 'Español'}
      </HeaderLink>
      <HeaderLink className={handleClass('c2')} href="#skill">{language === 'es' ? 'Habilidades' : 'Skills'}</HeaderLink>
      <HeaderLink className={handleClass('c3')} href="#work">{language === 'es' ? 'Trabajos' : 'Work'}</HeaderLink>
      <HeaderLink className={handleClass('c4')} href="mailto:luis96raul1@gmail.com" target="blank">{language === 'es' ? 'Contacto' : 'Contact'}</HeaderLink>

      <HeaderLink className="desktop" onClick={() => setLanguage(language === 'es' ? 'en' : 'es')}>
        {language === 'es' ? 'English' : 'Español'}
      </HeaderLink>
      <HeaderLink className="desktop" href="#skill">{language === 'es' ? 'Habilidades' : 'Skills'}</HeaderLink>
      <HeaderLink className="desktop" href="#work">{language === 'es' ? 'Trabajos' : 'Work'}</HeaderLink>
      <HeaderLink className="desktop" href="mailto:luis96raul1@gmail.com" target="blank">{language === 'es' ? 'Contacto' : 'Contact'}</HeaderLink>
    </>
  );
}
