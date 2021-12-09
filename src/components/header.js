/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { languageContext } from './contexts/languageContext';
import { useState, useContext } from 'react';
import logo from '../assets/images/logo.jpg'
import sandwitchIcon from '../assets/icons/sandwichIcon.png'
import cancel from '../assets/icons/cancel.png'

const HeaderStyled=styled.div(css`
      position: fixed;
      background-color: white;
      z-index: 2;
      height: 5em;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0 20px;
      width: 100%;
      box-sizing: border-box;
      @media (max-width: 400px) {
        height: 6em;
        padding: 0 0px;
        font-size: 0.8em;
      }
`);
const HeaderMenu=styled.div(css`
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        width: 450px;
        @media (max-width: 500px) {
          display: none;
        }
`);
const SandwitchMenu=styled.div(css`
      display: none;
      width: 450px;
      @media (max-width: 500px) {
        display: flex;
        flex-direction: row;
        justify-content: flex-end;
        margin-right: 10vw;
      }
`)
export const HeaderLink=styled.a(css`
      cursor: pointer;
      text-decoration: none;
      color: #696969;
      &:visited{
        color: #696969;
      }
      &:hover{
        color: #5CB1B5;
      }
`);
const Menu=styled.ul(css`
      position: absolute;
      display: flex;
      flex-direction: column;
      padding: 15px;
      width: 150px;
      background-color: white;
      z-index: -1;
      box-shadow: -11px 10px 12px 0px rgb(0 0 0 / 20%);
      border-radius: 10px;
`)

export default function Header() {
  const {language, setLanguage} = useContext(languageContext);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <HeaderStyled>
      <div css={css`
        cursor: pointer;
        `}onClick={()=>window.location.replace('#home')}>
        <img src={logo} height='75' alt="logo" />
      </div>
      <SandwitchMenu>
          {menuOpen?
            <Menu>
              <HeaderLink onClick={()=>language==='es'?setLanguage('en'):setLanguage('es')}>{language==='es'?"English version":"Versión en español"}</HeaderLink><br/>
              <HeaderLink href="#skill">{language==='es'?"Habilidades":"Skills"}</HeaderLink><br/>
              <HeaderLink href="#work">{language==='es'?'Trabajos':'Works'}</HeaderLink><br/>
              <HeaderLink href="https://wa.me/982073665" target="blank">{language==='es'?'Contacto':'Contact'}</HeaderLink>
            </Menu>:null}
            <div>
              <img onClick={()=>menuOpen?setMenuOpen(false):setMenuOpen(true)} src={menuOpen?cancel:sandwitchIcon} height='25' alt="logo" />
            </div>
      </SandwitchMenu>
      <HeaderMenu>
        <HeaderLink onClick={()=>language==='es'?setLanguage('en'):setLanguage('es')}>{language==='es'?"English version":"Versión en español"}</HeaderLink>
        <HeaderLink href="#skill">{language==='es'?"Habilidades":"Skills"}</HeaderLink>
        <HeaderLink href="#work">{language==='es'?'Trabajos':'Works'}</HeaderLink>
        <HeaderLink href="https://wa.me/51982073665" target="blank">{language==='es'?'Contacto':'Contact'}</HeaderLink>
      </HeaderMenu>
    </HeaderStyled>
  )} 