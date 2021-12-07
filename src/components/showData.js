/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import Cancel from "../assets/icons/cancel.png"

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

export default function ShowData({type,name,img1,img2,children}) {
  const [hoverShow, setHoverShow] = useState(1);
  const [fullShow, setFullShow] = useState();

  useEffect(() => {
    if(fullShow) {
      document.documentElement.scrollTo({ top: document.documentElement.scrollTop+1, behavior: 'instant' });
      const preview = document.getElementById("fullShow");
      preview.scrollIntoView({inline:"center",behavior:"smooth"});
    }
  },[fullShow])
  
  function bigPicture(e){
    setFullShow(e.target.src);
  };
  
  function exitPreview(){
    setFullShow(false);
  }

  return(
    <div id="#home" css={css`
        display: grid;
        grid-template-columns: 1.5fr 1fr;
        align-items: center;
        justify-items: center;
        width: 90vw;
        position: absolute;
        @media (max-width: 940px) {
          grid-template-columns: none;
        }
        `}>
          {fullShow && <div id="fullShow" css={css`
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
                `} onClick={()=>exitPreview()}>
                <img src={Cancel} alt='cancel'/>
              </div>
              <img css={css`height:85vh;
                @media (max-width: 1300px) {
                  width: 100vw;
                  height: auto;
                }
                `} src={fullShow} alt='bigPicture'/>
            </div>}
        <ImgDiv>
          <Img css={css`
            position: absolute;
            top: 17%;
            left: 3%;
            z-index: ${hoverShow};
            @media (max-width: 768px){
              top: -2%;
              left: 0;
            }
            `}
            onClick={(e)=>bigPicture(e)}>
            <img src={img1} alt='imagen1' width="500"/>
          </Img>
          <Img
            onMouseOver={() => setHoverShow(-1)}
            onMouseOut={() => setHoverShow(1)}
            onClick={(e)=>bigPicture(e)}>
            <img src={img2} alt='imagen2' width="500"/>
          </Img>
        </ImgDiv>
        <div>
          <div css={css`
            font-size: 2.5rem;
            color:#5CB1B5;
            font-weight: 100;
            @media (max-width: 768px){
              margin-top: 15%;
              font-size: 1.5rem;
            }
            `}>
            {type}
          </div>
          <div css={css`
            color: #5CB1B5;
            font-size: 3.5rem;
            @media (max-width: 768px){
              font-size: 2.3rem;
            }
            `}>{name}</div>
          <div css={css`
            font-size: 1.5rem;
            @media (max-width: 768px){
              font-size: 1.2rem;
            }
            `}>
            {children}
          </div>
        </div>
      </div>
  )
}