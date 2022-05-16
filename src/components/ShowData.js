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
    margin-left: 20%;
    margin-bottom: 5%;
    img{
        width: 450px;
        }
    @media (max-width: 560px){
      img{
        width: 250px;
      }
    }
  }
`
export const ShowData = ({ direction, id, currentPage, type, name, img1, img2, children }) => {
  const [hoverShow, setHoverShow] = useState(1);
  const { setFullShow } = useContext(ModalContext);

  const bigPicture = (e) => {
    setFullShow(e.target.src);
  };

  const handleClass = (id) => {
    if (id === currentPage) {
      return direction === 'right' ? "carousel-item active animate__animated animate__backInRight" : "carousel-item active animate__animated animate__backInLeft"
    } else {
      return direction === 'left' ? "animate__animated animate__backOutRight carousel-item" : "animate__animated animate__backOutLeft carousel-item"
    }
  }

  return (
    <div id="home" className={`${handleClass(id)} d-block w-100`}>
      <div className="image-main-container">
        <ImgDiv>
          <Img className="float-img" css={css`
            position: absolute;
            top: 17%;
            left: 6%;
            z-index: ${hoverShow};
            @media (max-width: 1400px){
              top: 5%;
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