import React, { useContext } from 'react';
import styled from 'styled-components';
import { languageContext } from './contexts/LanguageContext';



export const HeaderLink = styled.a`
      cursor: pointer;
      text-decoration: none;
      color: #696969;
      padding: 10px;
      &:visited{
        color: #696969;
      }
      &:hover{
        color: #5CB1B5;
      }
`;

export const HeaderOptions = ({ menuOpen }) => {
  const { language, setLanguage } = useContext(languageContext);

  const handleClass = (container) => {
    return `${container} animate__animated ${menuOpen ? 'animate__slideInRight' : 'animate__slideOutLeft'}`
  }

  return (
    <>
      <HeaderLink className={handleClass('c1')} onClick={() => language === 'es' ? setLanguage('en') : setLanguage('es')}>{language === 'es' ? "English version" : "Versión en español"}</HeaderLink>
      <HeaderLink className={handleClass('c2')} href="#skill">{language === 'es' ? "Habilidades" : "Skills"}</HeaderLink>
      <HeaderLink className={handleClass('c3')} href="#work">{language === 'es' ? 'Trabajos' : 'Jobs'}</HeaderLink>
      <HeaderLink className={handleClass('c4')} href="mailto:luis96raul1@gmail.com" target="blank">{language === 'es' ? 'Contacto' : 'Contact'}</HeaderLink>
    </>
  )
}
