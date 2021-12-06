/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import logo from '../assets/images/logo.jpg';
import githubIcon from '../assets/icons/github.svg';
import linkedinIcon from '../assets/icons/linkedin.svg';
import arrowIcon from '../assets/icons/arrow.png';

const MainContent = styled.div(css`
      display: grid;
      grid-template-columns: 1.5fr 1fr;
      align-items: center;
      justify-items: center;
      box-sizing: border-box;
      height: 85vh;
`)

const LinksContainer = styled.div(css`
      width: 50%;
      display: flex;
      align-items: center;
      justify-content: space-evenly;
`)

export default function Title(){
  return (
    <>
    <MainContent>
      <div className="slider">
        <div className="container">
          <div className="slide x"></div>
          <div className="slide y"></div>
          <div className="slide z"></div>
        </div>
        <div className="shadow"></div>
      </div>
      <div css={css`
        padding: 0 50px;
        `}>
        <div>
          <img src={logo} height="200" alt="logo" />
        </div>
        <div css={css`
          font-size: 1.5rem;
          margin-bottom: 1.5rem;
          `}>
          Desarrollador, apasionado por la tecnología y sus nuevas tendencias.
        </div>
        <LinksContainer>
          <a href='https://github.com/luis96raul1' target="blank">
            <img src={githubIcon} height="54" alt="github" /></a>
          <a href='https://www.linkedin.com/in/luis-talavera-llerena/' target="blank">
            <img src={linkedinIcon} height="74" alt="linkedin" /></a>
        </LinksContainer>
      </div>
    </MainContent>
    <div css={css`
      font-size: 1.3rem;
      display: flex;
      align-items: center;
      flex-direction: column;
      cursor: pointer;
      height: 4.5rem;
      @media (max-height: 768px) {
        margin-top: -35px;
      }
      `}
      onClick={()=>window.location.replace('#work')} >
      Mira mi trabajo
      <img css={css`
        animation: down 2s;
        animation-iteration-count: infinite;
        @keyframes down {
          0% {
            padding-top: 0.5rem;
          }
          50%{
            padding-top: 1.5rem;
          }
          100%{
            padding-top: 0.5rem;
          }
        }
        `} src={arrowIcon} height="30" alt="arrow"/>
    </div>
    </>
  )
}