import styled from "@emotion/styled";

import { ShowSkillData } from "../components/showSkillData";
import { languageContext } from "../components/contexts/LanguageContext";
import { useContext, useReducer, useEffect, useState } from "react";
import { currentPageReducer } from "../components/reducer/currentPageReducer";

import { BackgroundTextSk } from "../components/styleComponents/backgroundText";
import { StatusButton } from "../components/styleComponents/sliderBootstrap";

import { JavaScriptImage, RubyOnRailsImage, ScrumImage } from "../components/imagesImport/skillImages";
import { CarouselButtons } from "../components/CarouselButtons";

const Body = styled.div`
    height: 100vh;
    display: flex;
    align-items: center;
    @media (max-width: 400px) {
      height: 93vh;
    }
`

const skills = [
  {
    id: 1,
    name: 'Frontend',
    image: JavaScriptImage,
    description: {
      'es': <span>Para el desarrollo de frontend, además de las tecnologías ya conocidas (HTML,CSS,JavaScript) manejo <strong>React.Js</strong>, framework que me permite desarrollar páginas interactivas con relativa facilidad. En este proyecto se emplearon algunas herramientas ya conocidas de React como Context, Effects, States, etc.</span>,
      'en': <span>For the development of frontend, besides the already known technologies (HTML,CSS,JavaScript) I also use <strong>React.Js</strong>, framework that allows me to develop interactive pages with relative ease. In this project I used some of the already known tools of React as Context, Effects, States, etc.</span>
    }
  },
  {
    id: 2,
    name: 'Backend',
    image: RubyOnRailsImage,
    description: {
      'es': <span>Mi primer acercamiento al backend fue con <strong>Ruby</strong> de la mano de su framework <strong>Ruby on Rails</strong> el cual me permitio hacer aplicaciones full stack asi como <strong>APIs</strong> para usar en otras aplicaciones. Desarrollé distintos proyectos con Ruby on Rails durante mi paso por Codeable usando distintas librerías que ayudaron a mejorar mi experiencia.<br />También usé bases de datos relaciones (<strong>PostgreSQL</strong>) así como no relaciones (almacenas en Firebase).</span>,
      'en': <span>My first approach to the backend was with <strong>Ruby</strong> of my hand of its framework <strong>Ruby on Rails</strong> which allowed me to make full stack applications as well as <strong>APIs</strong> to use in other applications. I developed different projects with Ruby on Rails during my Codeable journey using different libraries that helped me improve my experience.<br />I also used relational databases (<strong>PostgreSQL</strong>) as well as non-relational databases (stored in Firebase).</span>
    }
  },
  {
    id: 3,
    name: 'Agile',
    image: ScrumImage,
    description: {
      'es': <span>Llevé a cabo un curso de capacitación del marco de trabajo <strong>Scrum</strong>, actualmente muy usado para agilizar el trabajo en equipo y que rinde frutos en términos de organización.<br /> Como dato curioso... Antes de llevar dicha capacitación, durante trabajos colaborativos usaba con mis equipos (por pura coincidencia) metodologías muy parecidas a los <strong>Sprint</strong> para organizarnos antes de iniciar cualquier labor.</span>,
      'en': <span>I completed a training course of the <strong>Scrum</strong> framework, currently very used to speed up the work in teams and that yields fruits in terms of organization.<br /> As curious data... Before taking this training, during collaborative work I used with my teams (pure coincidence) similar methods to the <strong>Sprint</strong> to organize before starting any work.</span>
    }
  },
]
export const Skills = () => {
  const { language } = useContext(languageContext);
  const [currentPage, dispatch] = useReducer(currentPageReducer, 1);
  const [lastPage, setLastPage] = useState({ index: 1, direction: 'right' });

  useEffect(() => {
    setLastPage((c) => ({ index: currentPage, direction: c.index < currentPage ? 'right' : 'left' }));
  }, [currentPage, setLastPage])

  const handleCurrentIndex = (index) => {
    dispatch({ type: 'set', payload: index });
  }

  const onFocus = () => {
    window.location.replace('#skill');
  }

  return (
    <div id="skill" onClick={onFocus}>
      <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">

        <div className="carousel-indicators">
          {skills.map(({ name, id }) =>
            id === currentPage ?
              <StatusButton key={name} type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={id} className="active" aria-current="true" aria-label={`Slide ${id}`}></StatusButton>
              : <StatusButton key={name} onClick={() => handleCurrentIndex(id)} type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={id} aria-label={`Slide ${id}`}></StatusButton>
          )}

        </div>

        <BackgroundTextSk>
          {language === 'es' ? 'Mis habilidades' : 'My skills'}
        </BackgroundTextSk>


        <Body className="carousel-inner">
          {skills.map(({ name, id, type, image, description }) => <div
            key={name}
            className={id === currentPage ? "carousel-item active" : "carousel-item"}
          >
            <ShowSkillData direction={lastPage.direction} id={id} currentPage={currentPage} type={type} name={name} image={image}> {language === 'es' ? description.es : description.en} </ShowSkillData></div>)}
        </Body>

        <CarouselButtons data={skills} dispatch={dispatch} />

      </div>
    </div>
  )
}