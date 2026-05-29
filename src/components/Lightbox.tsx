import { useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useLightbox } from '../store/LightboxContext';
import { Icon } from './Icon';

export function Lightbox() {
  const { src, close } = useLightbox();

  useEffect(() => {
    if (!src) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') close(); };
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [src, close]);

  return (
    <AnimatePresence>
      {src && (
        <motion.div
          className="lightbox"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          onClick={close}
          role="dialog"
          aria-modal="true"
          aria-label="Image preview"
        >
          <button className="lightbox__close" onClick={close} aria-label="Close preview">
            <Icon name="close" size={16} />
          </button>
          <motion.div
            className="lightbox__frame"
            initial={{ scale: 0.95, y: 12 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.97, y: 6 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            onClick={(e) => e.stopPropagation()}
          >
            <img src={src} alt="Preview" />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
