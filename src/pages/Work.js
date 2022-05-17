import styled from "@emotion/styled";
import { languageContext } from "../components/contexts/LanguageContext";
import { useContext, useReducer, useState, useEffect } from "react";
import { HeaderLink } from "../components/HeaderOptions";
import { ShowData } from "../components/ShowData";
import { Image1, Image2, Image3, Image4, Image5, Image6 } from "../components/imagesImport/workImages";
import { BackgroundText } from "../components/styleComponents/backgroundText";
import { currentPageReducer } from "../components/reducer/currentPageReducer";
import { StatusButton } from "../components/styleComponents/sliderBootstrap";
import { CarouselButtons } from "../components/CarouselButtons";


const Body = styled.div`
    height: 100vh;
    display: flex;
    align-items: center;
`
const works = [{
  id: 1,
  img1: Image5,
  img2: Image6,
  type: { 'es': 'Mi trabajo', 'en': 'My work' },
  name: { 'es': <a href="https://www.footloose.pe/" rel="noreferrer" target="_blank">Footloose</a>, 'en': <a href="https://www.footloose.pe/" rel="noreferrer" target="_blank">Footloose</a> },
  description: {
    'es': <span>Es mi trabajo actual, donde estoy a cargo del desarrollo frontend de la página de e-comerce de Footloose <strong>realizando rediseños, adaptaciones a mobile e incluso nuevas landings</strong>. El framework usado es <strong>Vtex</strong>, el cual provee una solución integral para la empresa en cada ámbito que es necesario. Pese a que dicho framework cuenta con muchísimos componentes prediseñados, algunos requierimientos son mas exigentes y debo crear nuevos componentes a la medida con ayuda de <strong>ReactJs</strong>.</span>,
    'en': <span>It's my current job where I'm in charge of the frontend development of the Footloose e-commerce page, <strong>carrying out redesigns, adaptations to mobile and even new landings</strong>. The framework used is <strong>Vtex</strong>, which provides a comprehensive solution for the company in each area that is necessary. Although this framework has many predesigned components, some requirements are more demanding and I must create new custom components with the help of <strong>ReactJs</strong>.</span>
  }
},
{
  id: 2,
  img1: Image1,
  img2: Image2,
  type: { 'es': 'Mi trabajo', 'en': 'My work' },
  name: { 'es': <a href="https://www.codeable.la/" rel="noreferrer" target="_blank">Evaluación Codeable</a>, 'en': <a href="https://www.codeable.la/" rel="noreferrer" target="_blank">Evaluación Codeable</a> },
  description: {
    'es': <span>Estuve encargado de la parte frontend desarrollada en <strong>ReactJs</strong> de la <strong>página de registro y evaluación</strong> para los postulantes que deseen formar parte de <strong>Codeable</strong>. La evaluación considera varios factores tanto para la parte de código como la de inglés de: puntuación, tiempo para responder, 2 intentos para pasar la prueba de código satisfactoriamente, un editor de código embebido... La <strong>API</strong> fue hecha en <strong>Ruby on Rails</strong> y tiene las validaciones necesarias.</span>,
    'en': <span>I was in charge of the frontend developed in <strong>ReactJs</strong> of the <strong>registration and evaluation page</strong> for the applicants who want to become part of <strong>Codeable</strong>. The evaluation considers several factors both for the code as well as the English: score, time to answer, 2 attempts to pass the code test successfully, an embedded code editor... The <strong>API</strong> was made in <strong>Ruby on Rails</strong> and has the necessary validations.</span>
  }
},
{
  id: 3,
  img1: Image3,
  img2: Image4,
  type: { 'es': 'Mi trabajo', 'en': 'My work' },
  name: { 'es': 'Página personal', 'en': 'Personal page' },
  description: {
    'es': <span>Este pequeño proyecto hecho en <strong>ReactJs</strong> se irá actualizando conforme considere que tenga más material apto para ser incluido o vayan llegando ideas para mejorarlo.<br /> Si tienes alguna sugerencia, no dudes en hacérmela llegar puesto que me encanta el <strong>feedback</strong>.<br></br>Aqui está el <strong><HeaderLink href="https://github.com/luis96raul1/luis96raul1.github.io" target="blank">código</HeaderLink></strong> fuente por si deseas un poco más de información técnica la respecto.</span>,
    'en': <span>This small project developed in <strong>ReactJs</strong> will be updated as I think it has more material to be included or if there are ideas to improve it.<br /> If you have any suggestion, don't hesitate to make it reach me as I love the <strong>feedback</strong>.<br></br>Here is the <strong><HeaderLink href="https://github.com/luis96raul1/luis96raul1.github.io" target="blank">code</HeaderLink></strong> source for you to have some more technical information about it.</span>
  }
}];

export const Work = () => {
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
    window.location.replace('#work');
  }

  return (
    <div id="work" onClick={onFocus}>
      <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          {works.map(({ id }) =>
            id === currentPage ?
              <StatusButton key={id} type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={id} className="active" aria-current="true" aria-label={`Slide ${id}`}></StatusButton>
              : <StatusButton key={id} onClick={() => handleCurrentIndex(id)} type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={id} aria-label={`Slide ${id}`}></StatusButton>
          )}

        </div>
        <BackgroundText>
          {language === 'es' ? 'Mi trabajo' : 'My work'}
        </BackgroundText>
        <Body className="carousel-inner">
          {works.map(({ id, type, name, description, img1, img2 }) => <div
            key={id}
            className={id === currentPage ? "carousel-item active" : "carousel-item"}
          >
            <ShowData direction={lastPage.direction} id={id} currentPage={currentPage} type={language === 'es' ? type.es : type.en} name={language === 'es' ? name.es : name.en} img1={img1} img2={img2}> {language === 'es' ? description.es : description.en} </ShowData></div>)}
        </Body>

        <CarouselButtons data={works} dispatch={dispatch} />

      </div>
    </div>
  )
}
