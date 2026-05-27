/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { ReactNode } from "react";

const Body = styled.div`
  display: flex;
  flex-direction: row;
  align-content: center;
  justify-content: center;
  width: 82%;
  margin: auto;
  gap: 3rem;

  @media (max-width: 900px) {
    text-align: center;
    flex-direction: column;
    width: 90%;
    gap: 1.5rem;
    img { width: 44vw; }
  }

  @media (max-height: 600px) {
    flex-direction: row;
    img { height: 50vh; width: auto; }
  }
`

const Img = styled.div`
  border-radius: var(--radius-lg, 20px);
  box-shadow: var(--shadow-md, 0 8px 32px rgba(0,0,0,0.10));
  border: 1px solid var(--border, #E0DDD6);
  background-color: var(--surface, #FFFFFF);
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  padding: 2.5rem;
  transition: box-shadow 0.3s ease, transform 0.3s ease;

  &:hover {
    box-shadow: var(--shadow-lg, 0 20px 60px rgba(0,0,0,0.14));
    transform: translateY(-3px);
  }

  @media (max-width: 900px) { padding: 1.5rem; }
`

const ImgDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;

  @media (max-width: 870px) { img { width: 200px; } }
`

interface ShowSkillDataProps {
  direction: 'left' | 'right';
  id: number;
  currentPage: number;
  name: string;
  image: string;
  children: ReactNode;
}

export const ShowSkillData = ({ direction, id, currentPage, name, image, children }: ShowSkillDataProps) => {

  const handleClass = (id: number): string => {
    if (id === currentPage) {
      return direction === 'right'
        ? "carousel-item active animate__animated animate__backInRight"
        : "carousel-item active animate__animated animate__backInLeft";
    }
    return direction === 'left'
      ? "animate__animated animate__backOutRight carousel-item"
      : "animate__animated animate__backOutLeft carousel-item";
  }

  return (
    <div className={`${handleClass(id)} d-block w-100`}>
      <Body>
        <ImgDiv>
          <Img>
            <img src={image} alt='imagen' width="320" />
          </Img>
        </ImgDiv>

        <div className="showSkData-text-field">
          <div css={css`
            font-family: var(--font-display, 'Cormorant Garamond', Georgia, serif);
            color: var(--text, #1A1A1A);
            font-size: 3.2rem;
            font-weight: 400;
            line-height: 1.05;
            letter-spacing: -0.01em;
            margin-bottom: 0.75rem;

            @media (max-width: 730px) { font-size: 2.4rem; }
            @media (max-height: 600px) { font-size: 1.8rem; }
          `}>{name}</div>

          <div css={css`
            font-size: 0.95rem;
            line-height: 1.85;
            color: var(--text-muted, #6B6B6B);
            font-weight: 300;

            @media (max-width: 730px) { font-size: 0.875rem; }
            @media (max-height: 600px) { font-size: 0.75rem; }
          `}>
            {children}
          </div>
        </div>
      </Body>
    </div>
  )
}
