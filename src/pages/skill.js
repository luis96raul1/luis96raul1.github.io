/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import { css } from "@emotion/react";

import ShowSkillData from "../components/showSkillData";
import { languageContext } from "../components/contexts/languageContext";
import { useContext } from "react";
import JavaScriptImage from '../assets/images/javaScriptLogo.png'
import RubyOnRailsImage from '../assets/images/rubyOnRailsLogo.png'
import ScrumImage from '../assets/images/scrumImage.png'

const Body = styled.div`
    display: grid;
    grid-auto-flow: column;
    overflow-Y:hidden;
    height: 100vh;
`
const BackgroundText = styled.div`
  color: rgba(0,0,0,0.03);
  width: 100%;
  text-align: center;
  font-size: 14vw;
  position: absolute;
  top: 225%;
  z-index: -1;
  font-weight: bold;
  overflow: hidden;
`
const skills = [
  {
    name: 'Frontend',
    image: JavaScriptImage,
    description: {
      'es': <span>Para el desarrollo de frontend, además de las tecnologías ya conocidas (HTML,CSS,JavaScript) manejo <strong>React.Js</strong>, framework que me permite desarrollar páginas interactivas con relativa facilidad. En este proyecto se emplearon algunas herramientas ya conocidas de React como Context, Effects, States, etc.</span>,
      'en': <span>For the development of frontend, besides the already known technologies (HTML,CSS,JavaScript) I also use <strong>React.Js</strong>, framework that allows me to develop interactive pages with relative ease. In this project I used some of the already known tools of React as Context, Effects, States, etc.</span>
    }
  },
  {
    name: 'Backend',
    image: RubyOnRailsImage,
    description: {
      'es': <span>Mi primer acercamiento al backend fue con <strong>Ruby</strong> de la mano de su framework <strong>Ruby on Rails</strong> el cual me permitio hacer aplicaciones full stack asi como <strong>APIs</strong> para usar en otras aplicaciones. Desarrollé distintos proyectos con Ruby on Rails durante mi paso por Codeable usando distintas librerías que ayudaron a mejorar mi experiencia.<br />También usé bases de datos relaciones (<strong>PostgreSQL</strong>) así como no relaciones (almacenas en Firebase).</span>,
      'en': <span>My first approach to the backend was with <strong>Ruby</strong> of my hand of its framework <strong>Ruby on Rails</strong> which allowed me to make full stack applications as well as <strong>APIs</strong> to use in other applications. I developed different projects with Ruby on Rails during my Codeable journey using different libraries that helped me improve my experience.<br />I also used relational databases (<strong>PostgreSQL</strong>) as well as non-relational databases (stored in Firebase).</span>
    }
  },
  {
    name: 'Agile',
    image: ScrumImage,
    description: {
      'es': <span>Llevé a cabo un curso de capacitación del marco de trabajo <strong>Scrum</strong>, actualmente muy usado para agilizar el trabajo en equipo y que rinde frutos en términos de organización.<br /> Como dato curioso... Antes de llevar dicha capacitación, durante trabajos colaborativos usaba con mis equipos (por pura coincidencia) metodologías muy parecidas a los <strong>Sprint</strong> para organizarnos antes de iniciar cualquier labor.</span>,
      'en': <span>I completed a training course of the <strong>Scrum</strong> framework, currently very used to speed up the work in teams and that yields fruits in terms of organization.<br /> As curious data... Before taking this training, during collaborative work I used with my teams (pure coincidence) similar methods to the <strong>Sprint</strong> to organize before starting any work.</span>
    }
  },
]
export default function Skill() {
  const { language } = useContext(languageContext);

  function horizontalScrolling(e) {
    const element = document.getElementById('skill');
    element.scrollLeft += e.deltaY;
  }

  return (
    <Body id="skill" onWheel={(e) => horizontalScrolling(e)}>
      <BackgroundText>
        {language === 'es' ? 'Mis habilidades' : 'My skills'}
      </BackgroundText>
      {skills.map((skill) => <div key={skill.name} css={css`  
          width: 100vw;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;`}>
        <ShowSkillData type={skill.type} name={skill.name} image={skill.image}> {language === 'es' ? skill.description.es : skill.description.en} </ShowSkillData></div>)}
    </Body>
  )
}