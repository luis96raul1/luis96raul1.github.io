import { motion, useReducedMotion } from 'framer-motion';
import { Fragment, type ReactNode } from 'react';

type SplitWordsProps = {
  text: string;
  className?: string;
  delay?: number;
  stagger?: number;
  /** Wrap a specific word in a child node (e.g. <em>). The matched word(s) get rendered through wrapMatch. */
  highlight?: string[];
  wrapMatch?: (word: string) => ReactNode;
};

export function SplitWords({
  text,
  className,
  delay = 0,
  stagger = 0.06,
  highlight = [],
  wrapMatch
}: SplitWordsProps) {
  const reduce = useReducedMotion();
  const words = text.split(/(\s+)/); // keep whitespace tokens

  if (reduce) {
    return <span className={className}>{text}</span>;
  }

  return (
    <motion.span
      className={className}
      initial="hidden"
      animate="show"
      variants={{
        hidden: {},
        show: { transition: { delayChildren: delay, staggerChildren: stagger } }
      }}
    >
      {words.map((tok, i) => {
        if (/^\s+$/.test(tok)) return <Fragment key={i}>{tok}</Fragment>;
        const isHighlight = highlight.includes(tok.replace(/[.,!?;:]/g, ''));
        const inner = isHighlight && wrapMatch ? wrapMatch(tok) : tok;
        return (
          <span key={i} className="word">
            <motion.span
              style={{ display: 'inline-block' }}
              variants={{
                hidden: { y: '110%', opacity: 0 },
                show: {
                  y: 0,
                  opacity: 1,
                  transition: { duration: 0.85, ease: [0.16, 1, 0.3, 1] }
                }
              }}
            >
              {inner}
            </motion.span>
          </span>
        );
      })}
    </motion.span>
  );
}
