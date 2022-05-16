/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useContext } from 'react';
import { ModalContext } from './contexts/ModalContext';
import Cancel from "../assets/icons/cancel.png"

export const Modal = () => {
  const { fullShow, setFullShow } = useContext(ModalContext);

  const handleClose = (e) => !(e.target.alt === "bigPicture") && setFullShow(false);

  return (
    <>
      {fullShow && <div className="animate__animated animate__fadeIn"
        onClick={handleClose}
        css={css`
    position: fixed;
    z-index: 3;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.7);
    `}>
        <div className="animate__animated animate__fadeInRight" css={css`
        position: absolute;
        right: 2%;
        top: 2%;
        background: white;
        border-radius: 50%;
        padding: 5px;
        cursor: pointer;
        `} onClick={handleClose}>
          <img src={Cancel} alt='cancel' />
        </div>
        <img css={css`height:85vh;
        @media (max-width: 1300px) {
          width: 100vw;
          height: auto;
        }
        `} src={fullShow} alt='bigPicture' />
      </div>}
    </>
  )
}
