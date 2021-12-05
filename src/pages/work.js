/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
// import { css } from "@emotion/react";
// import StillInProgress from "../assets/images/stillProgress.jpg";
// import { TimelineMax } from "gsap";
// import ScrollMagic from "scrollmagic";

import ShowData from "../components/showData";
import Image1 from '../assets/images/CodeableTesting1.png';
import Image2 from '../assets/images/CodeableTesting2.png';
import Header from "../components/header";

const Body = styled.div`
  height: 84vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
const BackgroundText=styled.div`
  color: rgba(0,0,0,0.05);
  font-size: 21vw;
  position: absolute;
  z-index: -1;
  font-weight: bold;
  overflow: hidden;
`

export default function Work() {

//     const controller = new ScrollMagic.Controller()
//     const movePercent = 100 / 2; //works.length
//     const wipeAnimation = new TimelineMax()
//     for (let index = 1; index < 2; index++) {
//         wipeAnimation.to("#worksContainer", 1, {
//             x: `-${index * movePercent}%`,
//         }) // move in to first panel
//     }

//     // create scene to pin and link animation
//     new ScrollMagic.Scene({
//         triggerElement: "#work",
//         triggerHook: "onLeave",
//         duration: 2 + "00%",
//     })
//         .setPin("#work")
//         .setTween(wipeAnimation)
//         .addTo(this.controller)

// //     this.controller.scrollTo(`#${work}`)

  return (
    <>
    <Header/>
    <Body>
      <BackgroundText>
        Mi trabajo
      </BackgroundText>
      <ShowData type='Mi trabajo' name='Codeable Testing' img1={Image1} img2={Image2}>
        Me encargue de la parte de fronted en la pagina de codeable, donde los usuarios que estan postulando para poder ser parte del bootcamp Codeable se pueden registrar brindando sus datos, luego son evaluados en ambitos de ingles y codigo con un tiempo definido para saber si cumplen con el conocimiento previo.
      </ShowData> 
    </Body>
    </>
  )
}
