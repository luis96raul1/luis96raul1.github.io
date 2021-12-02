/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import logo from '../assets/images/logo.jpg'

const HeaderStyled=styled.div(css`
      height: 5em;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0 20px;
      width: 100%;
      box-sizing: border-box;
`)
const HeaderMenu=styled.div(css`
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        width: 350px;
`)
const HeaderLink=styled.div(css`
      cursor: pointer;
      &:hover{
        color: #5CB1B5;
      }
`)

export default function Header() {
  return (
    <HeaderStyled>
      <div css={css`
        cursor: pointer;
        `}onClick={()=>window.location.replace('/home')}>
        <img src={logo} height='75' alt="logo" />
      </div>
      <HeaderMenu>
        <HeaderLink>Habilidades</HeaderLink>
        <HeaderLink>Trabajos</HeaderLink>
        <HeaderLink>Contacto</HeaderLink>
      </HeaderMenu>
    </HeaderStyled>
  )}