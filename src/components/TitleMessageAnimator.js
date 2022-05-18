import styled from 'styled-components';
import { useState, useEffect } from 'react';

const Body = styled.div`
    font-size: 1.5rem;
    margin-bottom: 1.5rem;
`

const HiddenSpan = styled.div`
  visibility: hidden;
  height:0;
`

export const TitleMessageAnimator = ({ message }) => {
  const [value, setValue] = useState([]);

  // const printer = useCallback(() => {
  //   message.split('').map((letter, index) =>
  //     setTimeout(() => setValue(c => c + letter), 30 * index))
  // }, [message])

  useEffect(() => {
    setValue([]);

    message.split('').map((letter, index) =>
      setTimeout(() => setValue(c => c + letter), 10 * index))

    // message.split('$').map((chnk, index) =>
    //   setTimeout(() => chnk.split('').map((letter, index) =>
    //     setTimeout(() => setValue(c => c + letter), 30 * index)
    //   ), 100 * chnk.length * index)
    // )
    // printer();

    // printer();

  }, [setValue, message])


  return (
    <Body>
      <span>
        {value}
        <span className='animate__animated animate__flash animate__infinite'>|</span>
      </span>
      <HiddenSpan>{message}</HiddenSpan>
    </Body>
  )
}
