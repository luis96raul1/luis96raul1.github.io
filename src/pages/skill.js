/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import { css } from "@emotion/react";

import ShowSkillData from "../components/showSkillData";

import JavaScriptImage from '../assets/images/javaScriptLogo.png'
import RubyOnRailsImage from '../assets/images/rubyOnRailsLogo.png'

const Body = styled.div`
    display: grid;
    grid-auto-flow: column;
    overflow-Y:hidden;
    height: 100vh;
`
const BackgroundText=styled.div`
  color: rgba(0,0,0,0.03);
  font-size: 14vw;
  position: absolute;
  top: 220%;
  z-index: -1;
  font-weight: bold;
  overflow: hidden;
`
const skills = [
  {name:'JavaScript',
  image:JavaScriptImage,
  description:"JavaScript al ser el principal lenguaje para desarrollo web, fue completamente necesario de aprender"},
  {name:'Ruby on Rails',
  image:RubyOnRailsImage,
  description:"JavaScript al ser el principal lenguaje para desarrollo web, fue completamente necesario de aprender"}
]
export default function Skill(){
  function horizontalScrolling(e){
    // e.preventDefault();
    //horizontal scroll
    const element = document.getElementById('skill');
    element.scrollLeft += e.deltaY;
  }

  return (
    <Body id="skill"  onWheel={(e)=>horizontalScrolling(e)}>
      <BackgroundText>
        Mis habilidades
      </BackgroundText>
      {skills.map((skill)=><div css={css`  
          width: 100vw;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;`}>
        <ShowSkillData type={skill.type} name={skill.name} image={skill.image}> {skill.description} </ShowSkillData></div>)}
    </Body>
  )
}