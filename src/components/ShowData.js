/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { useState } from "react";
import { useContext } from "react";


import { ModalContext } from "./contexts/ModalContext";

const Img = styled.div`
  border-radius: 20px;
  box-shadow: 0px 0px 10px rgba(0,0,0,0.3);
  line-height: 0;
  overflow: hidden;
  `
const ImgDiv = styled.div`
  margin-top: 25%;
  margin-left: 40%;
  cursor: pointer;
  @media (max-width: 1700px) {
    margin-left: 25%;
  }
  @media (max-width: 1250px){
    margin-top: 20%;
    margin-left: 10%;
    img{
        width: 350px;
        }
    @media (max-width: 400px){
      img{
        width: 250px;
      }
    }
  }
`
export const ShowData = ({ type, name, img1, img2, children }) => {
  const [hoverShow, setHoverShow] = useState(1);
  const { setFullShow } = useContext(ModalContext);

  const bigPicture = (e) => {
    setFullShow(e.target.src);
  };

  return (
    <div id="home" className="d-block w-100">
      <div css={css`
        display: grid;
        grid-template-columns: 1.5fr 1fr;
        align-items: center;
        justify-items: center;
        width: 90vw;
        margin: auto;
        @media (max-width: 940px) {
          grid-template-columns: none;
        }
        `}>

        <ImgDiv>
          <Img className="float-img" css={css`
            position: absolute;
            top: 17%;
            left: 6%;
            z-index: ${hoverShow};
            @media (max-width: 768px){
              top: -2%;
              left: 0;
            }
            `}
            onClick={bigPicture}>
            <img src={img1} alt='imagen1' width="500" />
          </Img>
          <Img
            onMouseOver={() => setHoverShow(-1)}
            onMouseOut={() => setHoverShow(1)}
            onClick={bigPicture}>
            <img src={img2} alt='imagen2' width="500" />
          </Img>
        </ImgDiv>
        <div>
          <div className="type-container">
            {type}
          </div>
          <div className="name-container">{name}</div>
          <div className="content-container">
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}