/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import logo from '../assets/images/logo.jpg';
import githubIcon from '../assets/icons/github.svg';
import linkedinIcon from '../assets/icons/linkedin.svg';
import arrowIcon from '../assets/icons/arrow.png';
import { languageContext } from '../components/contexts/LanguageContext';
import { useContext, memo } from 'react';
import { TitleMessageAnimator } from '../components/TitleMessageAnimator';

const MainContent = styled.div(css`
  display: grid;
  align-items: center;
  justify-items: center;
  box-sizing: border-box;
  height: 85vh;
  grid-template-columns: 1.5fr 1fr;

  @media (max-height: 600px) {
    height: 90vh;
    div { font-size: 15px; text-align: center; }
    img { width: 50%; }
    .myLogo { width: 110px; height: 110px; }
  }

  @media (max-width: 768px) {
    grid-template-columns: none;
    grid-template-rows: 1fr 1fr;
    padding-top: 4.5rem;
    height: 90vh;
    div { font-size: 20px; text-align: center; }
    .myLogo { width: 130px; height: 130px; }
  }
`)

const LinksContainer = styled.div(css`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-top: 0.5rem;

  @media (max-width: 768px), (max-height: 600px) {
    justify-content: center;
  }
`)

const SocialLink = styled.a(css`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 42px;
  height: 42px;
  border-radius: 50%;
  border: 1.5px solid var(--border, #E0DDD6);
  background: var(--surface, #FFFFFF);
  transition: border-color 0.2s ease, background 0.2s ease, transform 0.2s ease;
  text-decoration: none;

  &:hover {
    border-color: var(--accent, #5CB1B5);
    background: var(--accent, #5CB1B5);
    transform: translateY(-2px);
  }

  &:hover img {
    filter: brightness(0) invert(1);
  }
`)

export const Title = memo(() => {
  const { language } = useContext(languageContext);

  return (
    <div id="home">
      <MainContent>
        <div className="slider">
          <div className="container">
            <div className="slide x"></div>
            <div className="slide y"></div>
            <div className="slide z"></div>
          </div>
        </div>

        <div css={css`padding: 0 3rem; @media (max-width: 768px) { padding: 0 1.5rem; }`}>
          <div>
            <img
              className='myLogo'
              src={logo}
              alt="logo"
              css={css`
                border-radius: 50%;
                object-fit: cover;
                width: 155px;
                height: 155px;
                border: 2.5px solid var(--border, #E0DDD6);
                box-shadow: var(--shadow-md, 0 8px 32px rgba(0,0,0,0.10));
                display: block;
                margin-bottom: 1.5rem;
              `}
            />
          </div>

          <TitleMessageAnimator
            message={
              language === 'es'
                ? 'Desarrollador de software, apasionado por la tecnología y sus nuevas tendencias.'
                : 'Software developer, passionate about technology and its new trends.'
            }
          />

          <LinksContainer>
            <SocialLink href='https://github.com/luis96raul1' target="blank" aria-label="GitHub">
              <img src={githubIcon} height="20" alt="github" />
            </SocialLink>
            <SocialLink href='https://www.linkedin.com/in/luis-talavera-llerena/' target="blank" aria-label="LinkedIn">
              <img src={linkedinIcon} height="22" alt="linkedin" />
            </SocialLink>
          </LinksContainer>
        </div>
      </MainContent>

      <div
        className="title-to-job-pointer"
        onClick={() => window.location.replace('#work')}
      >
        {language === 'es' ? 'Mira mi trabajo' : 'See my work'}
        <img
          css={css`
            animation: down 2s ease-in-out infinite;
            @keyframes down {
              0%   { transform: translateY(0); }
              50%  { transform: translateY(8px); }
              100% { transform: translateY(0); }
            }
          `}
          src={arrowIcon}
          height="26"
          alt="arrow"
        />
      </div>
    </div>
  )
})
