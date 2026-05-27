/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { useState, useContext, ReactNode } from "react";
import { ModalContext } from "./contexts/ModalContext";

const Img = styled.div`
  border-radius: var(--radius-lg, 20px);
  box-shadow: var(--shadow-md, 0 8px 32px rgba(0,0,0,0.10));
  line-height: 0;
  overflow: hidden;
  cursor: zoom-in;
  transition: box-shadow 0.3s ease, transform 0.3s ease;

  &:hover {
    box-shadow: var(--shadow-lg, 0 20px 60px rgba(0,0,0,0.14));
    transform: translateY(-3px);
  }

  @media (max-height: 600px) { margin: 15px; }
`

const ImgDiv = styled.div`
  margin-top: 25%;
  margin-left: 40%;
  cursor: pointer;

  @media (max-width: 1700px) { margin-left: 25%; }

  @media (max-width: 1250px) {
    margin-top: 20%;
    margin-left: 20%;
    margin-bottom: 5%;
    img { width: 450px; }

    @media (max-width: 560px) {
      img { width: 250px; }
    }
  }

  @media (max-height: 600px) {
    display: flex;
    margin: auto;
    img { height: 25vh; width: auto; }
  }
`

interface ShowDataProps {
  direction: 'left' | 'right';
  id: number;
  currentPage: number;
  type: ReactNode;
  name: ReactNode;
  img1: string;
  img2: string;
  children: ReactNode;
}

export const ShowData = ({ direction, id, currentPage, type, name, img1, img2, children }: ShowDataProps) => {
  const [hoverShow, setHoverShow] = useState(1);
  const { setFullShow } = useContext(ModalContext);

  const bigPicture = (e: React.MouseEvent<HTMLDivElement>) => {
    setFullShow((e.target as HTMLImageElement).src);
  };

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
    <div id="home" className={`${handleClass(id)} d-block w-100`}>
      <div className="image-main-container">
        <ImgDiv>
          <Img
            className="float-img"
            css={css`
              position: absolute;
              top: 17%;
              left: 6%;
              z-index: ${hoverShow};
              @media (max-width: 1400px) { top: 5%; }
              @media (max-height: 600px)  { position: inherit; }
            `}
            onClick={bigPicture}
          >
            <img src={img1} alt='imagen1' width="500" />
          </Img>
          <Img
            onMouseOver={() => setHoverShow(-1)}
            onMouseOut={() => setHoverShow(1)}
            onClick={bigPicture}
          >
            <img src={img2} alt='imagen2' width="500" />
          </Img>
        </ImgDiv>

        <div css={css`
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
        `}>
          <div className="type-container">{type}</div>
          <div className="name-container">{name}</div>
          <div className="content-container">{children}</div>
        </div>
      </div>
    </div>
  )
}
