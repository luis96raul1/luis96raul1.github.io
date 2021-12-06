/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { useState } from "react";
import Cancel from "../assets/icons/cancel.png"

const Img = styled.div`
  border-radius: 20px;
  box-shadow: 0px 0px 10px rgba(0,0,0,0.3);
  line-height: 0;
  background-color: white;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  `
const ImgDiv = styled.div`
  margin-top: 25%;
  margin-left: 40%;
  @media (max-width: 1700px) {
    margin-left: 25%;
  }
`

export default function ShowSkillData({type,name,image,children}) {
  const [fullShow, setFullShow] = useState();

  return(
    <div css={css`
        display: grid;
        grid-template-columns: 1fr 1fr;
        align-items: center;
        justify-items: center;
        width: 100%;
        height: 100%;
        `}>
          {fullShow && <div css={css`
            position: absolute;
            z-index: 2;
            display: flex;
            align-items: center;
            justify-content: center;
            width: 100vw;
            height: 100vh;
            background-color: rgba(0,0,0,0.7);
            `}>
              <div css={css`
                position: absolute;
                right: 3%;
                top: 3%;
                cursor: pointer;
                `} onClick={()=>setFullShow(false)}>
                <img src={Cancel} alt='cancel'/>
              </div>
              <img css={css`height:85vh;`} src={fullShow} alt='bigPicture'/>
            </div>}
        <ImgDiv>
          <Img>
            <img src={image} alt='imagen' width="500"/>
            {console.log(image)}
          </Img>
        </ImgDiv>
        <div>
          <div css={css`
            font-size: 2.5rem;
            color:#5CB1B5;
            font-weight: 100;
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