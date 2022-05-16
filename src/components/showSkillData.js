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
    img{
      width: 44vw;
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

export const ShowSkillData = ({ name, image, children }) => {

  return (
    <div className="d-block w-100">
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
    </div>
  )
}