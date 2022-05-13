/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import logo from '../assets/images/logo.jpg';
import githubIcon from '../assets/icons/github.svg';
import linkedinIcon from '../assets/icons/linkedin.svg';
import arrowIcon from '../assets/icons/arrow.png';
import { languageContext } from '../components/contexts/languageContext';
import { useContext } from 'react';

const MainContent = styled.div(css`
      display: grid;
      align-items: center;
      justify-items: center;
      box-sizing: border-box;
      height: 85vh;
      grid-template-columns: 1.5fr 1fr;
      @media (max-height: 600px) {
        height: 90vh;
        div{
        font-size: 20px;
        text-align: center;
      }
      .myLogo{
          width: 160px;
          height: auto;
        }
    }
      @media (max-width: 768px) {
        grid-template-columns: none;
        grid-template-rows: 1fr 1fr;
        padding-top: 4.5rem;
        height: 90vh;
        div{
          font-size: 20px;
          text-align: center;
        }
        .myLogo{
          width: 160px;
          height: auto;
        }
      }
`)

const LinksContainer = styled.div(css`
      width: 50%;
      display: flex;
      align-items: center;
      justify-content: space-evenly;
      @media (max-width: 768px), (max-height: 600px)  {
        width: 100%;
        justify-content: center;
      }
`)

export const Title = () => {
  const { language } = useContext(languageContext);

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
            <img className='myLogo' src={logo} height="200" alt="logo" />
          </div>
          <div css={css`
          font-size: 1.5rem;
          margin-bottom: 1.5rem;
          `}>
            {language === 'es' ? 'Desarrollador de software, apasionado por la tecnología y sus nuevas tendencias.' : 'Software developer, passionate about technology and its new trends.'}
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
      @media (max-width: 768px) {
        font-size: 20px;
      }
      `}
        onClick={() => window.location.replace('#work')} >
        {language === 'es' ? 'Mira mi trabajo' : 'See my work'}
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
        `} src={arrowIcon} height="30" alt="arrow" />
      </div>
    </>
  )
}