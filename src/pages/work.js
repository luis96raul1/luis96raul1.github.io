/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { languageContext } from "../components/contexts/languageContext";
import { useContext } from "react";
import { HeaderLink } from "../components/header";
import ShowData from "../components/showData";
import Image1 from '../assets/images/CodeableTesting1.png';
import Image2 from '../assets/images/CodeableTesting2.png';
import Image3 from '../assets/images/personalPage1.png';
import Image4 from '../assets/images/personalPage2.png';
import Image5 from '../assets/images/footloose-main.png';
import Image6 from '../assets/images/footloose-store.png';


const Body = styled.div`
    display: grid;
    grid-auto-flow: column;
    overflow-Y:hidden;
    height: 100vh;
`
const BackgroundText=styled.div`
  color: rgba(0,0,0,0.03);
  font-size: 21vw;
  position: absolute;
  width: 100%;
  text-align: center;
  z-index: -1;
  font-weight: bold;
  overflow: hidden;
  top: 120%; 
`
const works=[ {img1:Image5,
  img2:Image6,
  type:{'es':'Mi trabajo','en':'My work'},
  name:{'es':<a src="https://www.footloose.pe/" target="_blank">Footloose</a>,'en':<a src="https://www.footloose.pe/" target="_blank">Footloose</a>},
  description: {'es':<span>Es mi trabajo actual, donde estoy a cargo del desarrollo frontend de la página de e-comerce de Footloose <strong>realizando rediseños, adaptaciones a mobile e incluso nuevas landings</strong>. El framework usado es <strong>Vtex</strong>, el cual provee una solución integral para la empresa en cada ámbito que es necesario. Pese a que dicho framework cuenta con muchísimos componentes prediseñados, algunos requierimientos son mas exigentes y debo crear nuevos componentes a la medida con ayuda de <strong>ReactJs</strong>.</span>,
                'en':<span>It's my current job where I'm in charge of the frontend development of the Footloose e-commerce page, <strong>carrying out redesigns, adaptations to mobile and even new landings</strong>. The framework used is <strong>Vtex</strong>, which provides a comprehensive solution for the company in each area that is necessary. Although this framework has many predesigned components, some requirements are more demanding and I must create new custom components with the help of <strong>ReactJs</strong>.</span>}},
              {img1:Image1,
              img2:Image2,
              type:{'es':'Mi trabajo','en':'My work'},
              name:{'es':<a src="https://www.codeable.la/" target="_blank">Evaluación Codeable</a>,'en':<a src="https://www.codeable.la/" target="_blank">Evaluación Codeable</a>},
              description: {'es':<span>Estuve encargado de la parte frontend desarrollada en <strong>ReactJs</strong> de la <strong>página de registro y evaluación</strong> para los postulantes que deseen formar parte de <strong>Codeable</strong>. La evaluación considera varios factores tanto para la parte de código como la de inglés de: puntuación, tiempo para responder, 2 intentos para pasar la prueba de código satisfactoriamente, un editor de código embebido... La <strong>API</strong> fue hecha en <strong>Ruby on Rails</strong> y tiene las validaciones necesarias.</span>,
                            'en':<span>I was in charge of the frontend developed in <strong>ReactJs</strong> of the <strong>registration and evaluation page</strong> for the applicants who want to become part of <strong>Codeable</strong>. The evaluation considers several factors both for the code as well as the English: score, time to answer, 2 attempts to pass the code test successfully, an embedded code editor... The <strong>API</strong> was made in <strong>Ruby on Rails</strong> and has the necessary validations.</span>}},
              {img1:Image3,
              img2:Image4,
              type:{'es':'Mi trabajo','en':'My work'},
              name:{'es':'Página personal','en':'Personal page'},
              description: {'es':<span>Este pequeño proyecto hecho en <strong>ReactJs</strong> se irá actualizando conforme considere que tenga más material apto para ser incluido o vayan llegando ideas para mejorarlo.<br/> Si tienes alguna sugerencia, no dudes en hacérmela llegar puesto que me encanta el <strong>feedback</strong>.<br></br>Aqui está el <strong><HeaderLink href="https://github.com/luis96raul1/luis96raul1.github.io" target="blank">código</HeaderLink></strong> fuente por si deseas un poco más de información técnica la respecto.</span>,
                            'en':<span>This small project developed in <strong>ReactJs</strong> will be updated as I think it has more material to be included or if there are ideas to improve it.<br/> If you have any suggestion, don't hesitate to make it reach me as I love the <strong>feedback</strong>.<br></br>Here is the <strong><HeaderLink href="https://github.com/luis96raul1/luis96raul1.github.io" target="blank">code</HeaderLink></strong> source for you to have some more technical information about it.</span>}}];

export default function Work(){
    const {language}=useContext(languageContext);

  return (
    <Body id="work">
      <BackgroundText className="backgroundText">
        {language==='es'?'Mi trabajo':'My work'}
      </BackgroundText>
        {works.map((work)=><div key={work.name.es} css={css`  
          width: 100vw;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;`}>
        <ShowData type={language==='es'?work.type.es:work.type.en} name={language==='es'?work.name.es:work.name.en} img1={work.img1} img2={work.img2}> {language==='es'?work.description.es:work.description.en} </ShowData></div>)}
    </Body>  
  )
}
