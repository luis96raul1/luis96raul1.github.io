import { TimelineMax } from "gsap"
import ScrollMagic from "scrollmagic"
import styled from "@emotion/styled"
import StillInProgress from "../assets/images/stillProgress.jpg"
import { css } from "@emotion/react"

const Body = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export default function Work() {
  return (
    <Body>
        Pagina aun en progreso...
      <div css={css`margin-top: 15px;`}>
        <img src={StillInProgress} alt="page in progress"></img>
      </div>
    </Body>
  )
}