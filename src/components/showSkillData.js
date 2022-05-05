/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import styled from "@emotion/styled";

const Body = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  width: 100%;
  height: 100%;
  @media (max-width: 730px) {
    grid-template-columns: none;
    height: 80%;
    text-align: center;
    img{
      width: 45vw;
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
      width: 350px;
    }
  }
`

export default function ShowSkillData({ name, image, children }) {

  return (
    <Body>
      <ImgDiv>
        <Img>
          <img src={image} alt='imagen' width="400" />
        </Img>
      </ImgDiv>
      <div css={css`
          padding: 25px;
          `}>
        <div css={css`
            color: #5CB1B5;
            font-size: 3.5rem;
            @media (max-width: 730px) {
              font-size: 2.5rem;
            }
            `}>{name}</div>
        <div css={css`
            font-size: 1.5rem;
            @media (max-width: 730px) {
              font-size: 1rem;
            }
            `}>
          {children}
        </div>
      </div>
    </Body>
  )
}