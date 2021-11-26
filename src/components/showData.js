/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import styled from "@emotion/styled";

const Img = styled.div`
  overflow: hidden;
  border-radius: 20px;
  box-shadow: 0px 0px 10px rgba(0,0,0,0.3);
  box-sizing: border-box;
  line-height: 0;
  `
const ImgDiv = styled.div`
  margin-top: 25%;
  margin-left: 40%;
`

export default function ShowData({type,name,img1,img2,children}) {
  return(
    <div css={css`
        display: grid;
        grid-template-columns: 1.5fr 1fr;
        align-items: center;
        justify-items: center;
        width: 90vw;
        position: absolute;
        `}>
        <ImgDiv>
          <Img css={css`
            position: absolute;
            top: 17%;
            left: 3%;
            `}>
            <img src={img1} alt='imagen1' width="500"/>
          </Img>
          <Img>
            <img src={img2} alt='imagen2' width="500"/>
          </Img>
        </ImgDiv>
        <div>
          <div css={css`
            font-size: 2.5rem;
            color:#5CB1B5;
            `}>
            {type}
          </div>
          <div css={css`
            color: #5CB1B5;
            font-size: 3.5rem;
            `}>{name}</div>
          <div css={css`
            font-size: 1.5rem;
            `}>
            {children}
          </div>
        </div>
      </div>
  )
}