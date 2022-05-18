/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import styled from "@emotion/styled";


const Body = styled.div`
    display: flex;
    flex-direction: row;
    align-content: center;
    justify-content: center;
    width: 80%;
    margin: auto;
  @media (max-width: 900px) {
    text-align: center;
    flex-direction: column;
    width: 90%;
    img{
      width: 44vw;
    }
  }
  @media (max-height: 600px) {
    display: flex;
    flex-direction: row;
    img{
      height: 50vh;
      width:auto;
    }
  }
`
const Img = styled.div`
  border-radius: 20px;
  box-shadow: 0px 0px 10px rgba(0,0,0,0.3);
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  `
const ImgDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 870px) {
    img{
      width: 250px;
    }
  }
`

export const ShowSkillData = ({ direction, id, currentPage, name, image, children }) => {

  const handleClass = (id) => {
    if (id === currentPage) {
      return direction === 'right' ? "carousel-item active animate__animated animate__backInRight" : "carousel-item active animate__animated animate__backInLeft"
    } else {
      return direction === 'left' ? "animate__animated animate__backOutRight carousel-item" : "animate__animated animate__backOutLeft carousel-item"
    }
  }

  return (
    <div className={`${handleClass(id)} d-block w-100`}>
      <Body>
        <ImgDiv>
          <Img>
            <img src={image} alt='imagen' width="400" />
          </Img>
        </ImgDiv>
        <div className="showSkData-text-field">
          <div css={css`
            color: #5CB1B5;
            font-size: 3.5rem;
            @media (max-width: 730px) {
              font-size: 2.5rem;
            }
            @media (max-height: 600px) {
              font-size: 2rem;
            }
            `}>{name}</div>
          <div css={css`
            font-size: 1.5rem;
            @media (max-width: 730px) {
              font-size: 1rem;
            }
            @media (max-height: 600px) {
              font-size: 0.8rem;
            }
            `}>
            {children}
          </div>
        </div>
      </Body>
    </div >
  )
}