import { useEffect, useRef, useState } from 'react';

type TypewriterProps = {
  text: string;
  speed?: number;
  startDelay?: number;
  className?: string;
};

export function Typewriter({ text, speed = 22, startDelay = 0, className }: TypewriterProps) {
  const [value, setValue] = useState('');
  const intervalRef = useRef<number | null>(null);
  const timeoutRef = useRef<number | null>(null);

  useEffect(() => {
    setValue('');
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce) {
      setValue(text);
      return;
    }

    let i = 0;
    timeoutRef.current = window.setTimeout(() => {
      intervalRef.current = window.setInterval(() => {
        i++;
        setValue(text.slice(0, i));
        if (i >= text.length && intervalRef.current !== null) {
          window.clearInterval(intervalRef.current);
        }
      }, speed);
    }, startDelay);

    return () => {
      if (intervalRef.current !== null) window.clearInterval(intervalRef.current);
      if (timeoutRef.current !== null) window.clearTimeout(timeoutRef.current);
    };
  }, [text, speed, startDelay]);

  return (
    <span className={className}>
      {value}
      <span aria-hidden="true" style={{ opacity: value.length === text.length ? 0 : 1, transition: 'opacity 0.3s' }}>|</span>
      <span style={{ visibility: 'hidden', position: 'absolute' }}>{text}</span>
    </span>
  );
}
