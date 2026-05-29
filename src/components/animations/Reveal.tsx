import { motion, useReducedMotion, type Variants } from 'framer-motion';
import type { ReactNode } from 'react';

type RevealProps = {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
  as?: 'div' | 'span' | 'li' | 'p' | 'h2' | 'section' | 'article';
  once?: boolean;
};

const variants: Variants = {
  hidden: { opacity: 0, y: 24 },
  show:   { opacity: 1, y: 0 }
};

export function Reveal({
  children,
  delay = 0,
  y = 24,
  className,
  as = 'div',
  once = true
}: RevealProps) {
  const reduce = useReducedMotion();
  const MotionTag = motion[as] as typeof motion.div;

  if (reduce) {
    const Tag = as as keyof JSX.IntrinsicElements;
    return <Tag className={className}>{children}</Tag>;
  }

  return (
    <MotionTag
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once, margin: '0px 0px -80px 0px' }}
      variants={{
        hidden: { opacity: 0, y },
        show:   { opacity: 1, y: 0 }
      }}
      transition={{ duration: 0.85, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </MotionTag>
  );
}

export const RevealStagger = ({
  children,
  className,
  delayChildren = 0.05,
  stagger = 0.08
}: {
  children: ReactNode;
  className?: string;
  delayChildren?: number;
  stagger?: number;
}) => (
  <motion.div
    className={className}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, margin: '0px 0px -80px 0px' }}
    variants={{
      hidden: {},
      show: { transition: { delayChildren, staggerChildren: stagger } }
    }}
  >
    {children}
  </motion.div>
);

export const StaggerItem = ({
  children,
  className,
  y = 20
}: { children: ReactNode; className?: string; y?: number }) => (
  <motion.div
    className={className}
    variants={{
      hidden: { opacity: 0, y },
      show:   { opacity: 1, y: 0, transition: { duration: 0.75, ease: [0.16, 1, 0.3, 1] } }
    }}
  >
    {children}
  </motion.div>
);

void variants;
