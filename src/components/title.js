/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

import logo from '../assets/images/logo.jpg';
import githubIcon from '../assets/icons/github.svg';
import linkedinIcon from '../assets/icons/linkedin.svg';

export default function Title(){
  return (
    <div css={css`
      display: grid;
      grid-template-columns: 2fr 1fr;
      align-items: center;
      justify-items: center;
      box-sizing: border-box;
      height: 90vh;
      `}>
      <div className="slider">
        <div className="container">
          <div className="slide x"></div>
          <div className="slide y"></div>
          <div className="slide z"></div>
        </div>
        <div className="shadow"></div>
      </div>
      <div>
        <div>
          <img src={logo} height="200" alt="logo" />
        </div>
        Desarrollador, apasionado por la tecnología y .
        <div css={css`
          display: flex;
          align-items: center;
          justify-content: space-around;
          `}>
          <img src={githubIcon} height="54" alt="github" />
          <img src={linkedinIcon} height="74" alt="linkedin" />
        </div>
      </div>
    </div>
  )
}