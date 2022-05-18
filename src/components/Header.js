/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import styled from 'styled-components';

import { HeaderOptions } from './HeaderOptions';
import { useState } from 'react';
import logo from '../assets/images/logo.jpg';
import sandwitchIcon from '../assets/icons/sandwichIcon.png';
import cancel from '../assets/icons/cancel.png';
import { useContext } from 'react';
import { ModalContext } from './contexts/ModalContext';

const HeaderStyled = styled.div`
      position: fixed;
      background-color: white;
      z-index: ${props => props.value};
      height: 5em;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0 20px;
      width: 100%;
      @media (max-width: 400px) {
        height: 6em;
        padding: 0 0px;
        font-size: 0.8em;
      }
      @media (max-height: 600px) {
        /* height: 3em; */
        font-size: 0.6em;
        img{
          height: 15vh;
        }
      }
`;
const HeaderMenu = styled.div`
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        width: 450px;
        @media (max-width: 500px) {
          display: none;
        }
`;
const SandwitchMenu = styled.div`
      display: none;
      width: 450px;
      @media (max-width: 500px) {
        display: flex;
        flex-direction: row;
        justify-content: flex-end;
        margin-right: 10vw;
      }
`;

const Menu = styled.ul`
      position: absolute;
      display: flex;
      flex-direction: column;
      padding: 15px;
      width: 150px;
      background-color: white;
      z-index: -1;
      box-shadow: -11px 10px 12px 0px rgb(0 0 0 / 20%);
      border-radius: 10px;
`;

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { fullShow } = useContext(ModalContext);

  return (
    <HeaderStyled value={fullShow ? 1 : 2}>
      <div css={css`
        cursor: pointer;
        `} onClick={() => window.location.replace('#home')}>
        <img src={logo} height='75' alt="logo" />
      </div>
      <SandwitchMenu>
        <Menu className={`animate__animated ${menuOpen ? 'animate__zoomIn' : 'animate__zoomOut'}`}>
          <HeaderOptions menuOpen={menuOpen} />
        </Menu>
        <div>
          <img onClick={() => setMenuOpen(!menuOpen)} src={menuOpen ? cancel : sandwitchIcon} height='25' alt="logo" />
        </div>
      </SandwitchMenu>
      <HeaderMenu>
        <HeaderOptions />
      </HeaderMenu>
    </HeaderStyled>
  )
} 