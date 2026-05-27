import styled from "@emotion/styled";

export const BackgroundText = styled.div`
  font-family: var(--font-display, 'Cormorant Garamond', Georgia, serif);
  font-style: italic;
  font-weight: 600;
  color: rgba(0, 0, 0, 0.035);
  font-size: 20vw;
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: -1;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  letter-spacing: -0.03em;
  pointer-events: none;
  user-select: none;
`

export const BackgroundTextSk = styled.div`
  font-family: var(--font-display, 'Cormorant Garamond', Georgia, serif);
  font-style: italic;
  font-weight: 600;
  color: rgba(0, 0, 0, 0.035);
  font-size: 13vw;
  position: absolute;
  width: 100%;
  z-index: -1;
  overflow: hidden;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  letter-spacing: -0.03em;
  pointer-events: none;
  user-select: none;
`
