import React, { useContext } from 'react';
import styled from 'styled-components';
import { languageContext } from './contexts/LanguageContext';



export const HeaderLink = styled.a`
      cursor: pointer;
      text-decoration: none;
      color: #696969;
      &:visited{
        color: #696969;
      }
      &:hover{
        color: #5CB1B5;
      }
`;

export const HeaderOptions = () => {
  const { language, setLanguage } = useContext(languageContext);

  return (
    <>
      <HeaderLink onClick={() => language === 'es' ? setLanguage('en') : setLanguage('es')}>{language === 'es' ? "English version" : "Versión en español"}</HeaderLink><br />
      <HeaderLink href="#skill">{language === 'es' ? "Habilidades" : "Skills"}</HeaderLink><br />
      <HeaderLink href="#work">{language === 'es' ? 'Trabajos' : 'Jobs'}</HeaderLink><br />
      <HeaderLink href="mailto:luis96raul1@gmail.com" target="blank">{language === 'es' ? 'Contacto' : 'Contact'}</HeaderLink>
    </>
  )
}
