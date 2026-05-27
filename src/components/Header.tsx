/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import styled from 'styled-components';

import { HeaderOptions } from './HeaderOptions';
import { useState, useContext } from 'react';
import logo from '../assets/images/logo.jpg';
import sandwitchIcon from '../assets/icons/sandwichIcon.png';
import cancel from '../assets/icons/cancel.png';
import { ModalContext } from './contexts/ModalContext';

const HeaderStyled = styled.div<{ value: number }>`
  position: fixed;
  background: rgba(249, 248, 245, 0.85);
  backdrop-filter: blur(18px);
  -webkit-backdrop-filter: blur(18px);
  z-index: ${props => props.value};
  height: 4.25rem;
  border-bottom: 1px solid rgba(224, 221, 214, 0.7);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 2.5rem;
  width: 100%;
  box-sizing: border-box;
  @media (max-width: 400px) {
    height: 5rem;
    padding: 0 1rem;
    font-size: 0.85em;
  }
  @media (max-height: 600px) {
    font-size: 0.65em;
    img { height: 12vh; }
  }
`;

const HeaderMenu = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.25rem;
  @media (max-width: 500px) { display: none; }
`;

const SandwitchMenu = styled.div`
  display: none;
  position: relative;
  @media (max-width: 500px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
    margin-right: 1rem;
  }
`;

const Menu = styled.ul`
  position: absolute;
  top: calc(100% + 0.75rem);
  right: 0;
  display: flex;
  flex-direction: column;
  padding: 0.5rem;
  min-width: 200px;
  background: rgba(249, 248, 245, 0.96);
  backdrop-filter: blur(18px);
  -webkit-backdrop-filter: blur(18px);
  z-index: 20;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.10), 0 0 0 1px rgba(224, 221, 214, 0.6);
  border-radius: 12px;
  list-style: none;
  margin: 0;
`;

const HamburgerBtn = styled.button`
  background: none;
  border: none;
  padding: 0.5rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  transition: background 0.18s ease;
  &:hover { background: rgba(92, 177, 181, 0.10); }
`;

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { fullShow } = useContext(ModalContext);

  return (
    <HeaderStyled value={fullShow ? 1 : 2}>
      <div
        css={css`cursor: pointer; display: flex; align-items: center;`}
        onClick={() => window.location.replace('#home')}
      >
        <img src={logo} height='50' alt="logo" css={css`
          border-radius: 50%;
          object-fit: cover;
          width: 42px;
          height: 42px;
          border: 1.5px solid rgba(224, 221, 214, 0.8);
        `} />
      </div>

      <SandwitchMenu>
        <Menu className={`animate__animated ${menuOpen ? 'animate__zoomIn' : 'animate__zoomOut'}`}>
          <HeaderOptions menuOpen={menuOpen} />
        </Menu>
        <HamburgerBtn onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
          <img src={menuOpen ? cancel : sandwitchIcon} height='20' alt="menu" />
        </HamburgerBtn>
      </SandwitchMenu>

      <HeaderMenu>
        <HeaderOptions />
      </HeaderMenu>
    </HeaderStyled>
  );
}
