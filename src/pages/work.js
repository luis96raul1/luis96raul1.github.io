/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";

import { css } from "@emotion/react";
// import StillInProgress from "../assets/images/stillProgress.jpg";

import ShowData from "../components/showData";
import Image1 from '../assets/images/CodeableTesting1.png';
import Image2 from '../assets/images/CodeableTesting2.png';

const Body = styled.div`
    display: grid;
    grid-auto-flow: column;
    overflow-Y:hidden;
    height: 100vh;
    .backgroundText{
      /* background-color: red; */
      /* display: flex; */
      /* justify-content: center; */
    }
`
const BackgroundText=styled.div`
  color: rgba(0,0,0,0.03);
  font-size: 21vw;
  position: absolute;
  width: 100%;
  top: 110%;
  text-align: center;
  z-index: -1;
  font-weight: bold;
  overflow: hidden;
`
const works=[{img1:Image1,
              img2:Image2,
              type:'Mi trabajo',
              name:'Codeable Testing',
              description: <span>Me encargue de la parte de fronted en la pagina de codeable, donde los usuarios que estan postulando para poder ser parte del bootcamp Codeable se pueden registrar brindando sus datos, luego son evaluados en ambitos de ingles y codigo con un tiempo definido para saber si cumplen con el conocimiento previo.</span>},
              {img1:Image1,
              img2:Image2,
              type:'Mi trabajo',
              name:'Codeable Testing 2',
              description: <span>Me encargue de la parte de fronted en la pagina de codeable, donde los usuarios que estan postulando para poder ser parte del bootcamp Codeable se pueden registrar brindando sus datos, luego son evaluados en ambitos de ingles y codigo con un tiempo definido para saber si cumplen con el conocimiento previo.</span>}]

export default function Work(){

  return (
    <Body id="work">
      <BackgroundText className="backgroundText">
        Mi trabajo
      </BackgroundText>
        {works.map((work)=><div css={css`  
          width: 100vw;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;`}>
        <ShowData type={work.type} name={work.name} img1={work.img1} img2={work.img2}> {work.description} </ShowData></div>)}
    </Body>  
  )
}
