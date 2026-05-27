import styled from 'styled-components';
import { useState, useEffect } from 'react';

const Body = styled.div`
  font-family: var(--font-display, 'Cormorant Garamond', Georgia, serif);
  font-size: 1.55rem;
  font-weight: 300;
  font-style: italic;
  line-height: 1.6;
  color: var(--text-muted, #6B6B6B);
  margin-bottom: 2rem;
  letter-spacing: 0.01em;
`

const HiddenSpan = styled.div`
  visibility: hidden;
  height: 0;
  overflow: hidden;
`

interface TitleMessageAnimatorProps {
  message: string;
}

export const TitleMessageAnimator = ({ message }: TitleMessageAnimatorProps) => {
  const [value, setValue] = useState('');

  useEffect(() => {
    setValue('');
    message.split('').map((letter, index) =>
      setTimeout(() => setValue(c => c + letter), 10 * index))
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
